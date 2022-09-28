import React, { useState } from 'react'
import './navbar.scss';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu, BiX, BiChevronDown, BiChevronRight } from 'react-icons/bi'
import imgBottom from '../../assets/menuImg.webp'
import tvImg from '../../assets/8k.png'
import saleupImg from '../../assets/4kImg.jpg';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <div className='navbar'>
            <div className="container ">
                <nav id='navbar'>
                    <div className="all__shop__list" onClick={handleClick}>
                        <div className="biMenu">
                            {!toggle ? <BiMenu /> : <BiX className='bix' />}
                        </div>
                        <p className="shopBy">
                            SHOP BY DEPARTMENT
                        </p>
                        {/* left sub menu */}
                        <ul className={!toggle ? 'left__sub__menu' : "left__sub__menu active"}>
                            <li className='coputers__li'>
                                <Link to='/'>Computers <span className='compChevron'> <BiChevronRight /> </span></Link>
                                <div className="computer-sub-menu">
                                    <div className="top">
                                        <div className="left__products">
                                            <h3><Link to='/'>Products Pages</Link></h3>
                                            <div className="pages__links">
                                                <Link to='/'>All videos</Link>
                                                <Link to='/'>Included with Prime</Link>
                                                <Link to='/'>Prime Vido Channels</Link>
                                                <Link to='/'>Rent or Buy</Link>
                                                <Link to='/'>Your Watchlist</Link>
                                                <Link to='/'>Your Video Library</Link>
                                                <Link to='/'>Watch Anywhere</Link>
                                                <Link to='/'>Getting Started</Link>
                                                <Link to='/'>Computers & Accessories</Link>
                                                <Link to='/'>Laptops, Desktops & Monitors</Link>
                                            </div>
                                        </div>
                                        <div className="right__products">
                                            <h3><Link to='/'>More From Flexon</Link></h3>

                                            <div className="flexon__links">
                                                <Link to='/'>Categories</Link>
                                                <Link to='/'>Collection</Link>
                                                <Link to='/'>LookBook</Link>
                                                <Link to='/'>Shopping Cart</Link>
                                                <Link to='/'>Wishlist</Link>
                                                <Link to='/'>Order Tracking</Link>
                                                <Link to='/'>Checkout</Link>
                                                <Link to='/'>Products 360</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bottom_img">
                                        <img src={imgBottom} alt="" />
                                    </div>
                                </div>
                            </li>

                            <li className='tv_li'><Link to='/'>TV & Audios <span className='tvChevron'> <BiChevronRight /> </span> </Link>

                                <div className="tv__sub__menu flex">
                                    <div className="tv_left_side">
                                        <div className="tv_top flex">
                                            <div className="pro_page wrap3">
                                                <h3>Products Pages</h3>
                                                <Link to='/'>Thumb left</Link>
                                                <Link to='/'>Thumb right</Link>
                                                <Link to='/'>Thumb bottom</Link>
                                                <Link to='/'>No thumb</Link>
                                                <Link to='/'>Page Countdown</Link>
                                                <Link to='/'>Free Shipping</Link>
                                                <Link to='/'>Simple Product</Link>
                                                <Link to='/'>Variable Product</Link>
                                            </div>
                                            <div className="oter_page wrap3">
                                                <h3>Oter Pages</h3>
                                                <Link to='/'>Categories</Link>
                                                <Link to='/'>Collection</Link>
                                                <Link to='/'>LookBook</Link>
                                                <Link to='/'>Shopping Cart</Link>
                                                <Link to='/'>Wishlist</Link>
                                                <Link to='/'>Order Tracking</Link>
                                                <Link to='/'>Checkout</Link>
                                                <Link to='/'>Product 360</Link>
                                            </div>
                                        </div>
                                        <div className="tv_bottom flex">
                                            <div className="com_tab wrap3">
                                                <h3>Computers & Tablets</h3>
                                                <Link to='/'>Keyboard Cases</Link>
                                                <Link to='/'>Phone & Cellphone</Link>
                                                <Link to='/'>Printers & Supplies</Link>
                                                <Link to='/'>Cell Phone</Link>
                                                <Link to='/'>Carrier Phones</Link>
                                            </div>
                                            <div className="prime_video wrap3">
                                                <h3>Prime Video 2</h3>
                                                <Link to='/'>Carrier Phones</Link>
                                                <Link to='/'>Unlocked Phones</Link>
                                                <Link to='/'>Phone & Cellphone</Link>
                                                <Link to='/'>Cellphone Charges</Link>
                                                <Link to='/'>Printers & Supplies</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tv__right_side">
                                        <img src={tvImg} alt="" />
                                    </div>
                                </div>
                            </li>
                            <li><Link to='/'>Headphones</Link></li>
                            <li><Link to='/'>Printers & Ink</Link></li>
                            <li><Link to='/'>Home Theaters</Link></li>
                            <li><Link to='/'>PC Computers</Link></li>
                            <li><Link to='/'>Ultrabooks</Link></li>
                            <li><Link to='/'>Smartwatchers</Link></li>
                            <li><Link to='/'>Cameras & Photography</Link></li>
                            <li><Link to='/'>Smart Phone & Tablets</Link></li>
                            <li><Link to='/'>Video Games & Consoles</Link></li>
                            <li><Link to='/'>Toys & Hobbies</Link></li>
                            <li><Link to='/'>Watches & Eyewear</Link></li>
                        </ul>

                    </div>


                    {/* navbar__menu */}
                    <ul className="navbar__menu">
                        <li className='home_li'>
                            <NavLink to='/'>HOME <BiChevronDown /></NavLink>
                            <div className="dropDown__home flex">
                                <div className="left_dropDown">
                                    <Link to='/'>Home Page1</Link>
                                    <Link to='/'>Home Page2</Link>
                                    <Link to='/'>Home Page3</Link>
                                    <Link to='/'>Home Page4</Link>
                                    <Link to='/'>Home Page5</Link>
                                    <Link to='/'>Home Page6</Link>
                                    <Link to='/'>Home Page7</Link>
                                </div>
                                <div className="right_dropDown">
                                    <Link to='/'>Home Page8</Link>
                                    <Link to='/'>Home Page9</Link>
                                    <Link to='/'>Home Page10</Link>
                                    <Link to='/'>Home Page11</Link>
                                    <Link to='/'>Home Page12</Link>
                                    <Link to='/'>Home Page13</Link>
                                </div>
                            </div>
                        </li>
                        <li className='shop__li'><NavLink to='/shop'>SHOP <BiChevronDown /></NavLink>
                            <div className="shop__dropDown">
                                <div className="shop__top">
                                    <div className="shop__links">
                                        <div className="shop_layout">
                                            <h3>Shop Layout</h3>
                                            <Link to='/'>Sidebar Left</Link>
                                            <Link to='/'>Sidebar Right</Link>
                                            <Link to='/'>Top Sidebar</Link>
                                            <Link to='/'>Shop 5 Column</Link>
                                            <Link to='/'>Shop Full Width</Link>
                                            <Link to='/'>Product Zoom In</Link>
                                            <Link to='/'>Product Lens Zoom</Link>
                                            <Link to='/'>Product Mouse Zoom</Link>
                                        </div>

                                        <div className="shop_layout">
                                            <h3>Product Layout</h3>
                                            <Link to='/'>Thumb left</Link>
                                            <Link to='/'>Thumb right</Link>
                                            <Link to='/'>Thumb bottom</Link>
                                            <Link to='/'>No thumb</Link>
                                            <Link to='/'>Page Countdown</Link>
                                            <Link to='/'>Free Shipping</Link>
                                            <Link to='/'>Simple Product</Link>
                                            <Link to='/'>Variable Product</Link>
                                        </div>

                                        <div className="oter__sop__page">
                                            <h3>Oter Shop Page</h3>
                                            <Link to='/'>Categories</Link>
                                            <Link to='/'>Collection</Link>
                                            <Link to='/'>LookBook</Link>
                                            <Link to='/'>Shopping Cart</Link>
                                            <Link to='/'>Wishlist</Link>
                                            <Link to='/'>Order Tracking</Link>
                                            <Link to='/'>Checkout</Link>
                                            <Link to='/'>Product 360</Link>
                                        </div>

                                        <div className="product__categories">
                                            <h3>Product Categories</h3>
                                            <Link to='/'>Product - Bedroom</Link>
                                            <Link to='/'>Product - Outdoor</Link>
                                            <Link to='/'>Product - Decoration</Link>
                                            <Link to='/'>Product - Kitchen</Link>
                                            <Link to='/'>Product - Pagination Default</Link>
                                            <Link to='/'>Product - Load More Button</Link>
                                            <Link to='/'>Product - Infinit Scrolling </Link>
                                            <Link to='/'>Collection - 2.0</Link>
                                        </div>
                                    </div>

                                    <div className="shop__img">
                                        <img src={saleupImg} alt="" />
                                    </div>
                                </div>

                                <div className="shop__botton_sale">
                                    <p><strong>30% Off</strong> the shipping of your first order with the code: <span>DUKA-SALE 30</span></p>
                                </div>
                            </div>
                        </li>
                        <li className='page_li'><NavLink to='/page'>PAGE <BiChevronDown /></NavLink>
                            <div className="page__dropDown">
                                <Link to='/'>My Account</Link>
                                <Link to='/'>Contact Us</Link>
                                <Link to='/'>About Us</Link>
                                <Link to='/'>FAQs</Link>
                                <Link to='/'>Site Boxs</Link>
                                <Link to='/'>404</Link>
                            </div>
                        </li>
                        <li className='blog_li'><NavLink to='/blog'>BLOG <BiChevronDown /></NavLink>
                            <div className="blog__dropDown">
                                <Link to='/'>Grid no sidebar</Link>
                                <Link to='/'>Grid left sidebar</Link>
                                <Link to='/'>Grid right sidebar</Link>
                                <Link to='/'>List no sidebar</Link>
                                <Link to='/'>List left sidebar</Link>
                                <Link to='/'>List right sidebar</Link>
                            </div>
                        </li>
                        <li><NavLink to='/about'>ABOUT</NavLink></li>
                        <li><NavLink to='/contact-us'>CONTACT US</NavLink></li>
                    </ul>

                    <div className="free-shipping">
                        <p>Spend $120 more and get free shipping!</p>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar