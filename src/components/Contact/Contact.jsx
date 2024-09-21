import email from '../../icons/email.svg'
import phone from '../../icons/phone.svg'
import whatsapp  from '../../icons/whatsapp.svg'
import facebook  from '../../icons/facebook.svg'
import instagram  from '../../icons/instagram.svg'
import linkedin  from '../../icons/linkedin.svg'
import github  from '../../icons/github.svg'

import './Contact.css';






function Contact() {
  return (
    <div className='contact' id='contact'>
        <div className="left-contact">
            <h3>Get in touch with Us</h3>
            <div className="contact-icons">
                <div className="icon-cont">
                    <img src={email} alt="email icon" />
                    <p>kipkoechd09@gmail.com</p>
                </div>
                <div className="icon-cont">
                    <img src={phone} alt="phone icon" />
                    <p>+254745667442</p>
                </div>
                <div className="icon-cont">
                    <img src={whatsapp} alt="whatsapp icon" />
                    <p>+254745667442</p>
                </div>    
            </div>
            <div className="follow">
                <h3>Follow Us</h3>
                <div className="social-icons">
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={github} alt="github" />
                </div>
            </div>
        </div>
        <div className="contact-right">
            <form action="">
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Phone Number'/>
                <textarea name="message" id="" placeholder='Message'></textarea>
            </form>
            <button className='btn'>Send</button>
        </div>
    </div>
  )
}

export default Contact