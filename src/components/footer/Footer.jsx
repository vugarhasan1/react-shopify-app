import React from 'react'
import './footer.scss';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare, FaPinterestSquare, FaHeadset } from 'react-icons/fa'
import { playstore, appstore} from '../../assets/index';
import { Link } from 'react-router-dom';
import { payments } from '../../assets/index';


const Footer = () => {
    return (
        <footer id='footer'>
            <div className='footer__top'>
                <div className="footer-top-wrap container">
                    <div className="footer-icons">
                        <h4>Follow Us</h4>
                        <p className="content">
                            We make consolidating, marketing and tracking your social
                            media website easy.
                        </p>
                        <div className="icons">
                            <Link to='/' className='fa face'><FaFacebookSquare /></Link>
                            <Link to='/' className='fa inst'><FaInstagramSquare /></Link>
                            <Link to='/' className='fa twit'><FaTwitterSquare /></Link>
                            <Link to='/' className='fa pinterest'><FaPinterestSquare /></Link>
                            <Link to='/' className='fa youtube'><FaYoutubeSquare /></Link>
                        </div>
                    </div>
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
                    <div className="footer-apps">
                        <h4>Download App</h4>
                        <p className="content">
                            Dukamarket App is now available on App Store & Google Play. Get it now.
                        </p>
                        <div className="images">
                            <img src={playstore} alt="" />
                            <img src={appstore} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* footer Links */}
            <div className="footer__links">
                <div className="footer-links-container container">
                    <div className="link__help links">
                        <h4>Help & Customer Care</h4>
                        <li><Link to='/'>Laptop & Computer</Link></li>
                        <li><Link to='/'>Speaker & Audio</Link></li>
                        <li><Link to='/'>Cellphone</Link></li>
                        <li><Link to='/'>Video Game</Link></li>
                        <li><Link to='/'>Accessories</Link></li>
                        <li><Link to='/'>Delivery & Dispatch</Link></li>
                    </div>
                    <div className="link__account links">
                        <h4>My Account</h4>
                        <li><Link to='/'>Search</Link></li>
                        <li><Link to='/'>Product Support</Link></li>
                        <li><Link to='/'>Checkout</Link></li>
                        <li><Link to='/'>Shop Cart</Link></li>
                        <li><Link to='/'>Wishlist</Link></li>
                        <li><Link to='/'>New Arrivals</Link></li>
                    </div>
                    <div className="link__quick links">
                        <h4>Quick Links</h4>
                        <li><Link to='/'>Store Location</Link></li>
                        <li><Link to='/'>My Account</Link></li>
                        <li><Link to='/'>Orders Tracking</Link></li>
                        <li><Link to='/'>FAQs</Link></li>
                    </div>
                    <div className="link__customer links">
                        <h4>Customer Service</h4>
                        <li><Link to='/'>Help Center</Link></li>
                        <li><Link to='/'>Contact Us</Link></li>
                        <li><Link to='/'>Report Abuse</Link></li>
                        <li><Link to='/'>Submit a Dispute</Link></li>
                        <li><Link to='/'>Policies & Rules</Link></li>
                        <li><Link to='/'>Online Shopping</Link></li>
                    </div>
                    <div className="link__about links">
                        <h4>About The Store</h4>
                        <p className="content">
                            Our mission statement is to provide the absolute best
                            customer <br /> experience available in the Electronic industry
                            without exception.
                        </p>
                        <div className="call">
                            <div className="headphone"><FaHeadset /></div>
                            <div className="callNumber">
                                <span>Got Question? Call us 24/7!</span>
                                <p className="numb">+001 123 456 789</p>
                            </div>
                        </div>
                        <p className="address">Address: Walls Street 68, Mahattan, New York, USA</p>
                        <p className="mail">Mail: alothemes@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="the__last__footer__links">
                <div className="customer__links container">
                    <div className="links">
                        <li><Link to='/'>Online Shopping</Link></li>
                        <li><Link to='/'>Promotions</Link></li>
                        <li><Link to='/'>My Orders</Link></li>
                        <li><Link to='/'>My Orders</Link></li>
                        <li><Link to='/'>Help</Link></li>
                        <li><Link to='/'>Customer</Link></li>
                        <li><Link to='/'>Service</Link></li>
                        <li><Link to='/'>Support</Link></li>
                        <li><Link to='/'>Most Populars</Link></li>
                        <li><Link to='/'>New Arrivals</Link></li>
                        <li><Link to='/'>Special Producs</Link></li>
                        <li><Link to='/'>Manufacturers</Link></li>
                        <li><Link to='/'>Our Stores</Link></li>
                        <li><Link to='/'>Shipping</Link></li>
                        <li><Link to='/'>Payment</Link></li>
                        <li><Link to='/'>Checkout</Link></li>
                        <li><Link to='/'>Discount</Link></li>
                        <li><Link to='/'>Terms & Conditions</Link></li>
                        <li><Link to='/'>Policy Shipping</Link></li>
                        <li><Link to='/'>Returns</Link></li>
                        <li><Link to='/'>Refunds</Link></li>
                    </div>
                    <div className="payments">
                        <img src={payments} alt="" />
                    </div>
                    <p className="copyright">
                        Copyright © all rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer