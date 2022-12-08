function NavBar() {
  return (
    <>
      <nav>
        <div className='nav--social--wrapper'>
          <a  href="https://github.com/qaztiel/tibiaguessr">
            <i className='fa-brands fa-github fa-2x'></i>
          </a>
          <a href="https://www.tiktok.com/@tibiaguessr">
            <i className='fa-brands fa-tiktok fa-2x'></i>
          </a>
          <a href="https://www.instagram.com/tibiaguessr/">
            <i className='fa-brands fa-instagram fa-2x'></i>
          </a>
          <a href="https://twitter.com/tibiaguessr">
            <i className='fa-brands fa-twitter fa-2x'></i>
          </a>
        </div>
        <div className='nav--items'>
          <div className='logo'></div>
          <h1 className='nav--title'>Tibiaguessr</h1>
        </div>
        <div></div>
      </nav>
    </>
  );
}

export default NavBar;