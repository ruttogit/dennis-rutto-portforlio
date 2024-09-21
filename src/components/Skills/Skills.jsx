import javaScript from '../../icons/javascript.svg'
import html from '../../icons/html.svg'
import css from '../../icons/css.svg'
import react from '../../icons/react.svg'
import tailwind from '../../icons/tailwind.svg'
import figma from '../../icons/figma.svg'
import github from '../../icons/github.svg'
import photoshop from '../../icons/photoshop.svg'
import responsive from '../../icons/responsive.svg'
import './Skills.css'
function Skills() {
  return (
        <div class="container">
          <div class="row">
              <div class="skills-card">
                <img src={javaScript} alt="" />
                <p>Javascript</p>
              </div>
              <div class="skills-card">
                <img src={html} alt="" />
                <p>HTML</p>
              </div>
              <div class="skills-card">
                <img src={css} alt="" />
                <p>CSS</p>
              </div>
              <div class="skills-card">
                <img src={react} alt="" />
                <p>React JS</p>
              </div>
              <div class="skills-card">
                <img src={tailwind} alt="" />
                <p>Tailwind</p>
              </div>
          </div>
          <div class="row">
              <div class="skills-card">
                <img src={figma} alt="" />
                <p>Figma</p>
              </div>
              <div class="skills-card">
                <img src={github} alt="" />
                <p>Git & Github</p>
              </div>
              <div class="skills-card">
                <img src={photoshop} alt="" />
                <p>Photoshop</p>
              </div>
          </div>
          <div class="row">
              <div class="skills-card">
                <img src={responsive} alt="" />
                <p>Responsive Design</p>
              </div>
          </div>
      </div>
  )
}

export default Skills