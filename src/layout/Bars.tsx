const NavMenu = () => {
  const openMenu = () => {
    const bars = document.getElementById('nav-menu')
    const menu = document.getElementById('menu')
    const header = document.getElementById('header-top')
    bars?.classList.toggle('active')
    menu?.classList.toggle('hidden')
    header?.classList.toggle('bg-primary')
  }
  return (
    <button
      className='hover:text-white/50'
      id='nav-menu'
      onClick={openMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default NavMenu
