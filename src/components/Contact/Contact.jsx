import email from '../../icons/email.svg'
import phone from '../../icons/phone.svg'
import whatsapp  from '../../icons/whatsapp.svg'
import facebook  from '../../icons/facebook.svg'
import instagram  from '../../icons/instagram.svg'
import linkedin  from '../../icons/linkedin.svg'
import github  from '../../icons/github.svg'
import React from 'react'

import './Contact.css';






function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a62e0d06-cb4d-4b50-9b93-27c30cbb69d9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' id='contact'>
        <div className="left-contact">
            <h3>Get in touch with Us</h3>
            <div className="contact-icons">
                <div className="icon-cont">
                    <a href="mailto:kipkoechd09@gmail.com"><img src={email} alt="email icon" /><p>kipkoechd09@gmail.com</p></a>
                </div>
                <div className="icon-cont">
                    <a href="tel:254745667442" target="_blank" rel="noopener noreferrer"><img src={phone} alt="phone icon" /> <p>+254745667442</p></a>
                </div>
                <div className="icon-cont">
                    <a href="https://wa.me/254745667442" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="whatsapp icon" /><p>+254745667442</p></a>  
                </div>    
            </div>
            <div className="follow">
                <h3>Follow Us</h3>
                <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100091280856188" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /></a>
                    <a href="https://www.instagram.com/rutto7862/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" /></a>
                    <a href="https://www.linkedin.com/in/dennis-kipkoech-9b3549272/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" /></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a>
                </div>

            </div>
        </div>
        <div className="contact-right">
            <form action="" onSubmit={onSubmit}>
                <input type="text" placeholder='Name' required/>
                <input type="text" placeholder='Email' required/>
                <input type="text" placeholder='Phone Number' required/>
                <textarea name="message" id="" placeholder='Message' required></textarea>
                <button type="submit" className='btn contact-btn'>Send</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact