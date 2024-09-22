import heroImg from '../../images/hero-portforlio 1.png'
import resume from '../../resume/DENNIS RUTTO FRONT END RESUME.pdf'
import './Hero.css'


function Hero() {
  return (
    <div className='hero' id='home'>
        <div className="hero-left">
            <h1>I AM</h1><h1 className='special'>DENNIS RUTTO</h1>
            <h2>A FRONT END DEVELOPER</h2>
            <p className='subtext'>I am a passionate and motivated Front-End Developer with one year of experience in creating dynamic and responsive web applications.</p>
            <div className="hero-buttons">
                <a href="#contact"><button className='btn hero-btn'>Hire Me</button></a>
                <a href={resume} download=''><button className='btn hero-btn'>Download CV</button></a>
            </div>
        </div>
        <div className="hero-right">
            <img src={heroImg} alt="" />
        </div>
        
    </div>
  )
}

export default Hero
