import { menu } from '../components/data'
import { useDataContext } from '../context/useDataContext'
import Social from './Social'

const Nav = () => {
  const { lan } = useDataContext()

  return (
    <nav
      className='absolute hidden fade-in h-screen w-screen top-0 bg-primary-opacity backdrop-blur'
      id='menu'
    >
      <div className='h-full w-full flex items-center justify-center'>
        <div className='flex flex-col items-center gap-y-10'>
          <ul className='flex flex-col gap-y-3 uppercase justify-center items-center tracking-widest lg:text-xl'>
            {menu.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className={`hover:text-white/50 transition-all scroll ${
                    index > 0 && index < 4 ? 'font-normal' : 'font-bold '
                  }`}
                >
                  {item[lan].title}
                </a>
              </li>
            ))}
          </ul>
          <div className='block lg:hidden'>
            <Social />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
