import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'
import ContactForm from '../contactForm/ContactForm'
import linkedin from '../../images/social/linkedin.png'
import github from '../../images/social/github.png'
import whatsapp from '../../images/social/whatsapp.png'

const Contact = () => {
  return (
    <Section title="Contacto">
      {/* <ContactForm /> */}
      <Bounce cascade>
        <div className="links">
          <a
            href="https://github.com/luisf2211"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github Logo" width="40px" />
          </a>
          <a
            href="https://wa.me/18295082211"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="Whatsapp Logo" width="40px" />
          </a>
          <a
            href="https://www.linkedin.com/in/luis-felipe-reyes-baez-08308a213/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Logo" width="40px" />
          </a>
        </div>
      </Bounce>
          <br/>
          <br/>
    </Section>
  )
}

export default Contact
