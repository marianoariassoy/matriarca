import { Logo } from '../components/icons'
import Social from './Social'
import Lan from './Lan'
import Bars from './Bars'
import Menu from './Menu'

const Header = () => {
  return (
    <header className='text-white fixed top-0 z-50 w-full'>
      <div
        className='flex items-center justify-between py-8 px-4 lg:px-8 z-10 absolute w-full bg-primary'
        id='header-top'
      >
        <div className='flex-1'>
          <Bars />
        </div>
        <div className='flex justify-center '>
          <a
            href='#'
            className='hover:text-white/50 transition-all lg:text-xl'
          >
            <Logo />
          </a>
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
