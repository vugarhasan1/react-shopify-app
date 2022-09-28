import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './accordionFooter.scss';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaPinterestSquare, FaYoutubeSquare, FaHeadset, FaDivide } from 'react-icons/fa';
import { playstore, appstore } from '../../assets/index';
import { payments } from '../../assets/index';




const AccordionFooter = () => {

    const [expanded, setExpanded] = useState(false);


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);

    };





    return (
        <section id='accordionFooter'>
            <div className="accordion__footer">
                {/* accordion1 */}
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='accordion'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='expandIcon' />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        className='accordionSummary'
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0, fontSize: '14px', fontWeight: '600' }} >
                            <div>Follow Us</div>
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails className='accordionDetails'>
                        <div className="footer-icons">
                            <h4>Follow Us</h4>
                            <p className="content">
                                We make consolidating, marketing and tracking your social
                                media website easy.
                            </p>
                            <div className="icons">
                                <Link to='/facebook.com' className='fa face'><FaFacebookSquare /></Link>
                                <Link to='/instagram.com' className='fa inst'><FaInstagramSquare /></Link>
                                <Link to='/twitter.com' className='fa twit'><FaTwitterSquare /></Link>
                                <Link to='/pinterest.com' className='fa pinterest'><FaPinterestSquare /></Link>
                                <Link to='/youtube.com' className='fa youtube'><FaYoutubeSquare /></Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                {/* accordion2 Sign Up To Newsletter*/}
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='accordion'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='expandIcon' />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        className='accordionSummary'
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0, fontSize: '14px', fontWeight: '600' }} className='typ_shop'>
                            <div>Sign Up To Newsletter</div>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className='accordionDetails'>
                        <div className="footer-input">
                            <h4>Sign Up To Newsletter</h4>
                            <p className="content">
                                Join 60.000+ subscribers and get a new discount coupon
                                on every Saturday.
                            </p>
                            <div className="inputs">
                                <input type="text" placeholder='Your email address..' className='email' />
                                <input type="button" value='Subscribe' className='subscribe' />
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                {/* accordion3---Download App */}
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='accordion'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='expandIcon' />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        className='accordionSummary'
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0, fontSize: '14px', fontWeight: '600' }}>
                            <div>Download App</div>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className='accordionDetails'>
                        <div className="footer-apps">
                            <h4>Download App</h4>
                            <div className="content">
                                Dukamarket App is now available on App Store & Google Play. Get it now.
                            </div>
                            <div className="images">
                                <img src={playstore} alt="" />
                                <img src={appstore} alt="" />
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                {/* accordion4- Help & Customer Care*/}
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className='accordion'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='expandIcon' />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                        className='accordionSummary'
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0, fontSize: '14px', fontWeight: '600' }}>
                            <div>Help & Customer Care</div>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className='accordionDetails'>
                        <li><Link to='/'>Laptop & Computer</Link></li>
                        <li><Link to='/'>Speaker & Audio</Link></li>
                        <li><Link to='/'>Cellphone</Link></li>
                        <li><Link to='/'>Video Game</Link></li>
                        <li><Link to='/'>Accessories</Link></li>
                        <li><Link to='/'>Delivery & Dispatch</Link></li>
                    </AccordionDetails>
                </Accordion>
                {/* accordion5- My Account*/}
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className='accordion'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='expandIcon' />}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                        className='accordionSummary'
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0, fontSize: '14px', fontWeight: '600' }}>
                            <div>My Account</div>
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails className='accordionDetails'>
                        <li><Link to='/'>Search</Link></li>
                        <li><Link to='/'>Product Support</Link></li>
                        <li><Link to='/'>Checkout</Link></li>
                        <li><Link to='/'>Shop Cart</Link></li>
                        <li><Link to='/'>Wishlist</Link></li>
                        <li><Link to='/'>New Arrivals</Link></li>
                    </AccordionDetails>

                </Accordion>
                {/* accordion6- Quick Links*/}
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className='accordion'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='expandIcon' />}
                        aria-controls="panel6bh-content"
                        id="panel6bh-header"
                        className='accordionSummary'
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0, fontSize: '14px', fontWeight: '600' }}>
                            <div>Quick Links</div>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className='accordionDetails'>
                        <li><Link to='/'>Store Location</Link></li>
                        <li><Link to='/'>My Account</Link></li>
                        <li><Link to='/'>Orders Tracking</Link></li>
                        <li><Link to='/'>FAQs</Link></li>
                    </AccordionDetails>
                </Accordion>
                {/* accordion7- Customer Service*/}
                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className='accordion'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='expandIcon' />}
                        aria-controls="panel7bh-content"
                        id="panel7bh-header"
                        className='accordionSummary'
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0, fontSize: '14px', fontWeight: '600' }}>
                            <div>Customer Service</div>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className='accordionDetails'>
                        <li><Link to='/'>Help Center</Link></li>
                        <li><Link to='/'>Contact Us</Link></li>
                        <li><Link to='/'>Report Abuse</Link></li>
                        <li><Link to='/'>Submit a Dispute</Link></li>
                        <li><Link to='/'>Policies & Rules</Link></li>
                        <li><Link to='/'>Online Shopping</Link></li>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className='accordion'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='expandIcon' />}
                        aria-controls="panel8bh-content"
                        id="panel8bh-header"
                        className='accordionSummary'
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0, fontSize: '14px', fontWeight: '600' }}>
                            <div>About The Store</div>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className='accordionDetails'>
                        <div className="link__about links">
                            <h4>About The Store</h4>
                            <div className="content">
                                Our mission statement is to provide the absolute best
                                customer <br /> experience available in the Electronic industry
                                without exception.
                            </div>
                            <div className="call">
                                <div className="headphone"><FaHeadset /></div>
                                <div className="callNumber">
                                    <span>Got Question? Call us 24/7!</span>
                                    <p className="numb">+001 123 456 789</p>
                                </div>
                            </div>
                            <div className="address">Address: Walls Street 68, Mahattan, New York, USA</div>
                            <FaDivide className="mail">Mail: alothemes@gmail.com</FaDivide>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <div className="payments">
                    <img src={payments} alt="" />
                </div>
                <div className="copyright">
                    Copyright © all rights reserved.
                </div>
            </div>
        </section>
    )
}

export default AccordionFooter