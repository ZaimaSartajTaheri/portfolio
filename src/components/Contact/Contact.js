import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';


import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
    import LanguageIcon from '@material-ui/icons/Language';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_o8sc3db', 'template_p1pd42g', e.target, 'user_JBJ2pPlmeZVQMfdvj86lB')
          .then((result) => {
              alert("We received your message.Thank you.")
          }, (error) => {
              console.log(error.text);
          });
      }
      
    return (
        <div className='container contactContainer'>
          <div className="row">
          <div className="col-md-6 mt-5 d-flex align-items-start flex-column info">
              <h2 className="blue-text">Feel Free To Contact</h2>
              <p>Hello Everyone! Have a great day 🙂 I am here to help you. If you want to know something or you have any suggestion then please mail me. Thank You.</p>
               <h5 className='contactInfo'><HomeIcon className="blue-text"></HomeIcon> 18/F,Bashundhara R/A,Dhaka</h5>
               <h5 className='contactInfo'><PhoneIcon className="blue-text"></PhoneIcon> +8801679833563</h5>
               <h5 className='contactInfo'><MailOutlineIcon className="blue-text"></MailOutlineIcon> zstaheri1999@gmail.com</h5>
               <a href="https://www.linkedin.com/in/zaima-sartaj-taheri/" className="iconLink" target="_blank"><h5 className='contactInfo'><LinkedInIcon className="blue-text"></LinkedInIcon> Linkedin</h5></a>
               <a className="iconLink" href="https://github.com/ZaimaSartajTaheri" target="_blank"><h5 className='contactInfo'><GitHubIcon className="blue-text"></GitHubIcon> Github</h5></a>
               
               <h5 className='contactInfo'><LanguageIcon className="blue-text"></LanguageIcon > Website</h5>

            </div>
            <div className="col-md-6 ml-auto mt-5 emailBox">
                
                <form onSubmit={sendEmail}>
                    <div class="form-group">
                        <input type="text" class="form-control"  placeholder="Your Name*" name="user_name" required/>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" aria-describedby="emailHelp"  placeholder="your email*" name="user_email" required/>
                    </div>
                    <div class="form-group">
                        <textarea type="text" class=" form-control textArea"  placeholder="Message*" name="message" required/>
                    </div>
                    <button type="submit" class="btn blue-back">Send Email</button>
                </form>
            </div>
          </div>
        </div>
    );
};

export default Contact;