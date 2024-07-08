import { menu } from '../components/data'
import { useDataContext } from '../context/useDataContext'
import Social from './Social'
import { useLocation, Link } from 'wouter'

const Nav = () => {
  const { lan } = useDataContext()
  const [location] = useLocation()

  const closeMenu = () => {
    const bars = document.getElementById('nav-menu')
    const menu = document.getElementById('menu')
    bars?.classList.toggle('active')
    menu?.classList.toggle('hidden')
  }

  return (
    <nav
      className='absolute hidden fade-in-fast h-screen w-screen top-0 bg-primary'
      id='menu'
      onClick={closeMenu}
    >
      <div className='h-full w-full flex items-center justify-center'>
        <div className='flex flex-col items-center gap-y-10'>
          <ul className='flex flex-col gap-y-2 uppercase justify-center items-center tracking-widest lg:text-xl'>
            {menu.map((item, index) => (
              <li key={index}>
                <Link
                  href={location === '/' ? item.path : '/'}
                  className={`hover:text-white/50 transition-all scroll ${
                    index > 0 && index < 4 ? 'font-normal' : 'font-bold '
                  }`}
                >
                  {item[lan].title}
                </Link>
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
