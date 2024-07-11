import { useEffect } from 'react'
import { useLocation, Link } from 'wouter'
import { Logo } from '../components/icons'
import Social from './Social'
import Lan from './Lan'
import Bars from './Bars'
import Menu from './Menu'

const Header = () => {
  const [location] = useLocation()

  useEffect(() => {
    const header = document.getElementById('header-top')
    const logo = document.getElementById('logo')
    window.onscroll = () => {
      if (window.scrollY > 100) {
        header?.classList.add('pt-3')
        header?.classList.add('pb-3')
        logo?.classList.remove('lg:text-xl')
      } else {
        header?.classList.remove('pt-3')
        header?.classList.remove('pb-3')
        logo?.classList.add('lg:text-xl')
      }
    }
  })

  return (
    <header className='text-white fixed top-0 z-50 w-full'>
      <div
        className='flex items-center justify-between py-8 px-6 lg:px-8 z-10 absolute w-full bg-primary transition-all'
        id='header-top'
      >
        <div className='flex-1'>
          <Bars />
        </div>
        <div className='flex justify-center '>
          <Link
            href={location === '/' ? '#hero' : '/'}
            className='transition-opacity hover:opacity-70 scroll lg:text-xl'
            id='logo'
          >
            <Logo />
          </Link>
        </div>
        <div className='flex items-center justify-end gap-x-6 flex-1'>
          <Lan />
          <div className='hidden lg:block'>
            <Social />
          </div>
        </div>
      </div>
      <Menu />
    </header>
  )
}

export default Header
