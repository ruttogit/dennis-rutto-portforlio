import './Projects.css'
import { projects } from '../../data'
function Projects() {
  return (
    <div className='projects' id='projects'>
        <h1 className='heading'>My <span className='special'>Projects</span></h1>
        <div className="projects-card-wrapper">
          {projects.map((item) =>{
            return(
                        <div className="projects-card" id={item.id}>
                        <div className="card-contain">
                            <div className="card-project">
                              <img src={item.image} alt="" />
                            </div>
                        </div>
                        <div className="projects-butons">
                          <a href={item.link} target="_blank" rel="noopener noreferrer"> <button className='btn projects-btn'>View Live</button></a>
                          <a href={item.codeLink} target="_blank" rel="noopener noreferrer"><button className='btn projects-btn'>View Code</button></a>
                        </div>
                    </div> 
            )  
          })}
        </div>
    </div>
  )
}

export default Projects