import './SideBar.css'
import home from '../../icons/home.svg'
import about from '../../icons/about.svg'
import services from '../../icons/services.svg'
import projects from '../../icons/projects.svg'
import contact from '../../icons/contact.svg'

function SideBar() {
  return (
    <div className='side-bar'>
        <div className="sidebar-icons">
          <a href="#home"><img src={home} alt="home" /></a>
          <a href="#about"><img src={about} alt="about" /></a>
          <a href="#services"><img src={services} alt="services" /></a>
          <a href="#projects"><img src={projects} alt="projects" /></a>
          <a href="#contact"><img src={contact} alt="contact" /></a>
        </div>
    </div>
  )
}

export default SideBar