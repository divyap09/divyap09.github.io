import './App.css'

const Header = () => {
  return(
    <div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li><a href="#about-section">About</a></li>
          <li><a href="#info-section">Work</a></li>
          <li><a href="#projects-section">Projects</a></li>
          <li><a href="#contact-section">Contact</a></li>
        </ul>
      </nav>
      
    </div>
  )
}

export default Header;