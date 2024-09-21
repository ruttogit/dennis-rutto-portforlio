import aboutImg from '../../images/about-img.png';
import './About.css'


function About() {
  document.addEventListener("DOMContentLoaded", function () {
    const aboutText = document.querySelector('.about-text');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutText.classList.add('active');
            }
        });
    });

    observer.observe(document.querySelector('#about'));
});
  return (
    <div className='about' id='about'>
        <div className="about-container">
            <div className="left-about">
                <img src={aboutImg} alt="image-about"  className='inimated-img'/>
            </div>
            <div className="right-about">
                <div className="about-title"><h1>About</h1><h1 className='special'>Me</h1></div>
                <p>I am passionate about creating dynamic, interactive web experiences with a focus on clean, efficient code. With a strong foundation in HTML, CSS, JavaScript, and ReactJS, I’ve worked on a range of projects, from landing pages to more complex e-commerce websites and web applications.
                In addition to my development skills, I’m pursuing a degree in Information Technology, where I’ve gained hands-on experience with troubleshooting, networking, and general IT tasks. This background has enhanced my ability to approach challenges from multiple angles.</p>
            </div>
        </div>
    </div>
  )
}

export default About