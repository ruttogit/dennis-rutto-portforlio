import heroImg from '../../images/hero-portforlio 1.png'
import './Hero.css'


function Hero() {
  return (
    <div className='hero' id='home'>
        <div className="hero-left">
            <h1>I AM</h1><h1 className='special'>DENNIS RUTTO</h1>
            <h2>A FRONT END DEVELOPER</h2>
            <p className='subtext'>I am a passionate and motivated Front-End Developer with one year of experience in creating dynamic and responsive web applications.</p>
            <div className="hero-buttons">
                <button className='btn hero-btn'>Hire Me</button>
                <button className='btn hero-btn'>Download CV</button>
            </div>

        </div>
        <div className="hero-right">
            <img src={heroImg} alt="" />
        </div>
        
    </div>
  )
}

export default Hero
