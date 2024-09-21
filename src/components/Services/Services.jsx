import ServicesCard from './ServicesCard';
import "./Services.css"


import { service } from '../../data';
function Services() {
  return (
    <div className='services-container' id='services'>
      <h1 className='heading'>My <span className='special'>Services</span></h1>
      <div className="services-wrapper">
        {service.map((item) =>{
          return(
          <ServicesCard title={item.title} image={item.image} description={item.description} key={item.id}/>)
        })}      
      </div>
      
    </div>
  )
}

export default Services