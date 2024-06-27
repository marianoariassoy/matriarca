import { Logo } from '../components/icons'
import { menu, social } from '../components/data'
import { useDataContext } from '../context/useDataContext'

const Footer = () => {
  const { lan } = useDataContext()

  return (
    <footer className='bg-primary py-12 flex justify-between lg:items-center gap-x-3 px-6 lg:px-8 text-white'>
      <div className='flex flex-col gap-y-6'>
        <nav className='flex flex-col gap-y-3 text-sm font-bold uppercase'>
          {menu.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className={`hover:text-white/50 transition-all scroll tracking-widest ${
                index > 0 && index < 4 ? 'hidden' : ''
              }`}
            >
              {item[lan].title}
            </a>
          ))}
        </nav>
        <nav className='flex gap-x-3'>
          {social.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className='text-xl hover:text-white/50 transition-all'
            >
              {item.icon}
            </a>
          ))}
        </nav>
      </div>
      <div className='lg:text-xl'>
        <Logo />
      </div>
    </footer>
  )
}

export default Footer
