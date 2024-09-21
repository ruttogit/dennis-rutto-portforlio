import './Footer.css'

function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    console.log(year)
  return (
    <div className='footer'>
        <p>©Coprighted {year} Dennis Rutto</p>
    </div>
  )
}

export default Footer