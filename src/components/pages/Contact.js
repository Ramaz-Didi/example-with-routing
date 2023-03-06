import React from 'react';
import styles from "./styles/contact.css"

function Contact(props) {
  return (
    <div>
      <div>
        <a className="contact" href="https://github.com/Ramaz-Didi">GitHub Profile</a>
      </div>
      <div>
        <a className="contact" href="https://www.linkedin.com/in/ramaz-kartozia-0048634a">Linkedin Profile</a>
      </div>
      <div>
        <a className="contact" href="https://github.com/Ramaz-Didi/example-with-routing/blob/main/src/components/pages/CV-Ramaz-Kartozia.pdf">resume's PDF version </a>
      </div>
      <li className="contactLi" >Email Address: Ramaz@some-email.com</li>
      <li className="contactLi" >Phone Number: +447777 777 777</li>
    
    </div>
  );
}

export default Contact;
