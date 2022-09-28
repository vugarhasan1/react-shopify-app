/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import './contact-us.scss';
import { contactUs, contact_hero } from '../../assets/index';
import { FaHeadset } from "react-icons/fa"
import { Link } from 'react-router-dom';



const ContactUs = () => {
  return (
    <section className='contact__us'>
      <div className="main__contact">
        <div className="image">
          <img src={contact_hero} alt="" />
          <div className="overlay"></div>
          <ul className='contact_ul'>
            <h2>Contact</h2>
            <li><Link to='/' className='home'>Home</Link></li>
            <li><Link to='/contact-us' className='before'>Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="send__message">
        <div className="container wrapper__info">
          <div className="left__side__info">
            <div className="image">
              <img src={contactUs} alt="" />
            </div>
            <div className="call">
              <div className="left__icon"><FaHeadset /></div>
              <div className="right__mail">
                <p>Dukamarket@google.com</p>
                <div className='phone'>(+100) 666-456-7890</div>
              </div>
            </div>
            <div className="main__info">
              <p>Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.</p>
              <p>Fax: (+100) 123 456 789</p>
              <p>Monday – Friday: 9:00-20:00</p>
              <p>Email: Contact@erentheme.com</p>
            </div>
          </div>
          <div className="right__side__message">
            <div className="up">
              <Link to="/">Get In Touch</Link>
            </div>
            <div className="inputs">
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Email' />
            </div>
            <div className="textarea">
              <textarea name="message" id="message" placeholder='Message' />
            </div>

            <div className="contact__btn">
              <button>SEND MESSAGE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="contact__iframe container">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50700.31868520124!2d-122.10722442834054!3d37.41891283525016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7519f9e09a1%3A0x84124175ee1e1a6e!2sMountain%20View%2C%20CA%2094043%2C%20USA!5e0!3m2!1sen!2s!4v1663159489450!5m2!1sen!2s"
          width="600"
          height="450"
          title='google map'
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>


      </div>


    </section>
  )
}

export default ContactUs