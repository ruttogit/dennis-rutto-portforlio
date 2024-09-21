
function ServicesCard({image, title, description}) {
  return (
    <div className='card'>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default ServicesCard