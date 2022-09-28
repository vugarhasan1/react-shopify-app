import React from 'react'
import './about.scss';
import { aboutImg, aboutStore, custom1, custom2, custom3, tech_img, tech_img2, team1, team2, team3, location1, location2, location3, location4 }
  from '../../assets/index';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'



const About = () => {


  return (
    <section className='about__us'>
      {/* main about */}
      <div className="main__about">
        <div className="about__img">
          <img src={aboutImg} alt="about" />
        </div>
        <div className="about__center">
          <h2>About Us</h2>
          <p className='about__content'>
            A wonderful serenity has taken possession of my entire soul, like these <br />
            sweet mornings of spring which I enjoy with my whole heart.
          </p>

          <button className='about__btn'>DISCOVER NOW</button>
        </div>
      </div>

      {/* store about */}
      <div className="about__store container">
        <div className="store__left">
          <p className="capter">ABOUT OUR  ONLINE STORE</p>
          <h2>
            <span className='hello'>Hello,</span> <br />With 25+ Years Of Experience
          </h2>
          <div className="store__goals">
            Over 25 years Dukamarket helping companies reach their<br /> financial and branding goals.
          </div>
          <p className="store__content">
            The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure <br />
            dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla <br />
            facilisis. For me, the most important part of improving at photography.
          </p>
        </div>

        <div className="store__right">
          <img src={aboutStore} alt="aboute_store" />
        </div>
      </div>


      {/* how it works */}
      <div className="how__it__works">
        <div className="container">

          <p className="chapter">HOW IT WORKS</p>
          <h3>Complete Customer Ideas</h3>

          <div className="customer__box">
            <div className="wrap box__wrap">
              <div className="icon__number">
                <div className="icon"><img src={custom1} alt="/" /></div>
                <div className="number">01</div>
              </div>
              <h4>Admin Verify Details</h4>
              <div className="content">
                Sed ut perspiciatis unde omnis iste natus
                error sit accusantium doloremque
                laudantium totam rem aperiam, eaqueipsa
                quae veritatis.
              </div>
            </div>

            <div className="wrap box__wrap">
              <div className="icon__number">
                <div className="icon"><img src={custom2} alt="/" /></div>
                <div className="number">02</div>
              </div>
              <h4>Admin Verify Details</h4>
              <div className="content">
                Sed ut perspiciatis unde omnis iste natus
                error sit accusantium doloremque
                laudantium totam rem aperiam, eaqueipsa
                quae veritatis.
              </div>
            </div>

            <div className="wrap box__wrap">
              <div className="icon__number">
                <div className="icon"><img src={custom3} alt="/" /></div>
                <div className="number">03</div>
              </div>
              <h4>Admin Verify Details</h4>
              <div className="content">
                Sed ut perspiciatis unde omnis iste natus
                error sit accusantium doloremque
                laudantium totam rem aperiam, eaqueipsa
                quae veritatis.
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* technology index */}
      <div className="container-fluid">
        <div className="technology__index">
          <div className="wrapper container">
            <p className="chapter">TECHNOLOGY INDEX</p>
            <h3 className='hr'>Let’s Get Creative</h3>

            <div className="main__tech">
              <div className="tech__left">
                <div className="image">
                  <img src={tech_img} alt="" />
                </div>
                <div className="info">
                  <div className="info__left">
                    <div className="icon_h3">
                      {/* <img src={icon_1} alt="" /> */}
                      <h3>5465+</h3>
                    </div>
                    <h4>Active Clients</h4>
                    <p className="content">
                      Sed ut perspiciatis unde omnisiste natus sit accusantium doloremque.
                    </p>
                  </div>
                  <div className="info__right">
                    <div className="icon_h3">
                      {/* <img src={icon_1} alt="" /> */}
                      <h3>4968+</h3>
                    </div>
                    <h4>Projects Done</h4>
                    <p className="content">
                      Sed ut perspiciatis unde omnisiste natus sit accusantium doloremque.
                    </p>
                  </div>
                </div>
              </div>


              <div className="main__right">
                <div className="tech__left">
                  <div className="image">
                    <img src={tech_img2} alt="" />
                  </div>
                  <div className="info">
                    <div className="info__left">
                      <div className="icon_h3">
                        {/* <img src={icon_1} alt="" /> */}

                        <h3>5465+</h3>
                      </div>
                      <h4>Projects Done</h4>
                      <p className="content">
                        Sed ut perspiciatis unde omnisiste natus sit accusantium doloremque.
                      </p>
                    </div>
                    <div className="info__right">
                      <div className="icon_h3">
                        {/* <img src={icon_1} alt="" /> */}
                        <h3>4968+</h3>
                      </div>
                      <h4>Users Online</h4>
                      <p className="content">
                        Sed ut perspiciatis unde omnisiste natus sit accusantium doloremque.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* the team */}
      <div className="the__team">
        <div className="wrapper__team container">
          <p className="chapter">THE TEAM</p>
          <h3 className='hr'>Meet Our Team</h3>
          <div className="team__members">
            <div className="member member1">
              <div className="image">
                <img src={team1} alt="" />
              </div>
              <p className="name">John Doe</p>
              <div className="position">Founder/CEO</div>
              <div className="icons">
                <FaFacebook className='fa face' />
                <FaInstagram className='fa inst' />
                <FaTwitter className='fa twit' />
                <FaPinterest className='fa pin' />
              </div>
              <p className="content">
                Sed ut perspiciatis unde omnis iste <br />
                natus error sitaccusantium doloremque laudan <br />
                totam rem aperiam.
              </p>
            </div>

            <div className="member member2">
              <div className="image">
                <img src={team2} alt="" />
              </div>
              <p className="name">John Doe</p>
              <div className="position">Finace Manager</div>
              <div className="icons">
                <FaFacebook className='fa face' />
                <FaInstagram className='fa inst' />
                <FaTwitter className='fa twit' />
                <FaPinterest className='fa pin' />
              </div>
              <p className="content">
                Sed ut perspiciatis unde omnis iste <br />
                natus error sitaccusantium doloremque laudan <br />
                totam rem aperiam.
              </p>
            </div>

            <div className="member member3">
              <div className="image">
                <img src={team3} alt="" />
              </div>
              <p className="name">John Doe</p>
              <div className="position">Design Manager</div>
              <div className="icons">
                <FaFacebook className='fa face' />
                <FaInstagram className='fa inst' />
                <FaTwitter className='fa twit' />
                <FaPinterest className='fa pin' />
              </div>
              <p className="content">
                Sed ut perspiciatis unde omnis iste <br />
                natus error sitaccusantium doloremque laudan <br />
                totam rem aperiam.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* location store section */}
      <div className="location__store">
        <div className="container">
          <div className="location">
            <p className="chapter">LOCATION STORE</p>
            <h3 className='hr'>Where We Are</h3>

            <div className="locations">
              <div className="place place1">
                <div className="image">
                  <img src={location1} alt="" />
                </div>
                <p className="place__name">94 Rue Pelleport - Paris</p>
                <div className="location__info">
                  <p className="address">Add: Heaven Stress, Beverly Hill, Melbourne</p>
                  <p className="phone">Phone: (+100) 123 456 7890E</p>
                  <p className="email">Email: Dukamarket@google.com</p>
                </div>
              </div>

              <div className="place place2">
                <div className="image">
                  <img src={location2} alt="" />
                </div>
                <p className="place__name">29 Prospect Height - New York</p>
                <div className="location__info">
                  <p className="address">Add: Heaven Stress, Beverly Hill, Melbourne</p>
                  <p className="phone">Phone: (+100) 123 456 7890E</p>
                  <p className="email">Email: Dukamarket@google.com</p>
                </div>
              </div>
              <div className="place place3">
                <div className="image">
                  <img src={location3} alt="" />
                </div>
                <p className="place__name">64 Georgia Rd - South Korea</p>
                <div className="location__info">
                  <p className="address">Add: Heaven Stress, Beverly Hill, Melbourne</p>
                  <p className="phone">Phone: (+100) 123 456 7890E</p>
                  <p className="email">Email: Dukamarket@google.com</p>
                </div>
              </div>

              <div className="place place4">
                <div className="image">
                  <img src={location4} alt="" />
                </div>
                <p className="place__name">86 Georgia Rd - Turkey</p>
                <div className="location__info">
                  <p className="address">Add: Heaven Stress, Beverly Hill, Melbourne</p>
                  <p className="phone">Phone: (+100) 123 456 7890E</p>
                  <p className="email">Email: Dukamarket@google.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </section>
  )
}

export default About