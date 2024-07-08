const NavMenu = () => {
  const openMenu = () => {
    const bars = document.getElementById('nav-menu')
    const menu = document.getElementById('menu')
    bars?.classList.toggle('active')
    menu?.classList.toggle('hidden')
  }
  return (
    <button
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
