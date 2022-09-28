import React, { useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { BiSearch, BiUser, BiShoppingBag, BiHeart, BiMenu, BiX, BiChevronDown } from 'react-icons/bi';
import { headerLogo, flag_ar, flag_de, flag_en } from '../../assets';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RegisterPopUp, Wishlist, ShoppingList } from '../../components/index';
import { useSelector } from 'react-redux';


const Header = () => {

    const cart = useSelector((store) => store.cart)

    const [headerMenu, setHeaderMenu] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [popUp, setPopUp] = useState(true);
    const [wishList, setWishList] = useState(false);
    const [shopList, setShopList] = useState(false);

    // handleChane(accordion)
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);

    };

    // handleHeaderToggle
    const handleHeaderToggle = () => {
        setHeaderMenu(!headerMenu)
    }

    // register popUp
    const handlePopUp = () => {
        setPopUp(!popUp)
    }

    //..........Wishlist popUp..............
    const handleWishList = () => {
        setWishList(!wishList)
    }

    //handleShopList............
    const handleShopList = () => {
        setShopList(!shopList)
    }

    return (
        <div className='header'>
            <div className="container header__navbar">
                <div className="logo__menu ">
                    <div className="headerMenu" onClick={handleHeaderToggle}>
                        {headerMenu ? <BiX /> : <BiMenu />}
                    </div>

                    <Link className="image" to='/'>
                        <img src={headerLogo} alt="" />
                    </Link>
                </div>
                {/* headerDropDownMenu */}
                <div className={!headerMenu ? "headerDropDownMenu" : "headerDropDownMenu show"}>
                    <div className="dropMenu-icon">
                        <div className="bix" onClick={handleHeaderToggle}><BiX /></div>
                        <div className="logo">
                            <img src={headerLogo} alt="" />
                        </div>
                    </div>

                    <div className="search__input">
                        <input type="text" className='inpt_search_item' placeholder='Search..' />
                        <button><BiSearch /></button>
                    </div>

                    {/* accordion */}
                    <div className="left__accMenu">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='accordion'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                className='accordionSummary'
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0, fontSize: '14px', fontWeight: '600' }} >
                                    <Link to='/'>HOME</Link>
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails className='accDetails'>
                                <li><Link to='/'>Home Page 1</Link></li>
                                <li><Link to='/'>Home Page 2</Link></li>
                                <li><Link to='/'>Home Page 3</Link></li>
                                <li><Link to='/'>Home Page 4</Link></li>
                                <li><Link to='/'>Home Page 5</Link></li>
                                <li><Link to='/'>Home Page 6</Link></li>
                                <li><Link to='/'>Home Page 7</Link></li>
                                <li><Link to='/'>Home Page 8</Link></li>
                                <li><Link to='/'>Home Page 9</Link></li>
                                <li><Link to='/'>Home Page 10</Link></li>
                                <li><Link to='/'>Home Page 11</Link></li>
                                <li><Link to='/'>Home Page 12</Link></li>
                                <li><Link to='/'>Home Page 13</Link></li>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='accordion'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                                className='accordionSummary'
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0, fontSize: '14px', fontWeight: '600' }} className='typ_shop'>
                                    <Link to='/shop'>SHOP <span className='triangle'></span> <span className='new'>new</span></Link>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='accDetails'>
                                <li><Link to='/'>Laptop & Computer</Link></li>
                                <li><Link to='/'>Speaker & Audio</Link></li>
                                <li><Link to='/'>Cellphone</Link></li>
                                <li><Link to='/'>Video Game</Link></li>
                                <li><Link to='/'>Accessories</Link></li>
                                <li><Link to='/'>Delivery & Dispatch</Link></li>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='accordion'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                                className='accordionSummary'
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0, fontSize: '14px', fontWeight: '600' }}>
                                    <li><Link to='/page'>PAGE</Link></li>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='accDetails'>
                                <li><Link to='/'>My Account</Link></li>
                                <li><Link to='/'>Contact Us</Link></li>
                                <li><Link to='/about'>About Us</Link></li>
                                <li><Link to='/'>FAQs</Link></li>
                                <li><Link to='/'>Site Boxs</Link></li>
                                <li><Link to='/'>404</Link></li>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className='accordion'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                                className='accordionSummary'
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0, fontSize: '14px', fontWeight: '600' }}>
                                    <li><Link to='/blog'>BLOG</Link></li>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='accDetails'>
                                <li><Link to='/'>Grid no sidebar</Link></li>
                                <li><Link to='/'>Grid left sidebar</Link></li>
                                <li><Link to='/'>Grid right sidebar</Link></li>
                                <li><Link to='/'>List no sidebar</Link></li>
                                <li><Link to='/'>List left sidebar</Link></li>
                                <li><Link to='/'>List right sidebar</Link></li>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className='accordion accordionWishlist'>
                            <Typography sx={{ width: '100%', fontSize: '14px', fontWeight: '600' }}>
                                <li> <Link to='/wishlist'> WISHLIST (0)</Link></li>
                            </Typography>
                        </Accordion>

                        <Accordion className='accordion accordionWishlist'>
                            <Typography sx={{ width: '100%', fontSize: '14px', fontWeight: '600' }}>
                                <li> <Link to='/compare'> COMPARE (0)</Link></li>
                            </Typography>
                        </Accordion>

                        <Accordion className='accordion accordionWishlist'>
                            <Typography sx={{ width: '100%', fontSize: '14px', fontWeight: '600' }}>
                                <li> <Link to='/account'> LOGIN / REGISTER </Link></li>
                            </Typography>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className='accordion'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel5bh-content"
                                id="panel5bh-header"
                                className='accordionSummary'
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0, fontSize: '14px', fontWeight: '600' }}>
                                    <li>
                                        <span><img src={flag_en} alt="" /></span>
                                        <Link to='/blog'> ENG  <BiChevronDown /></Link>
                                    </li>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='accDetails'>
                                <li> <span><img src={flag_en} alt="" /></span><Link to='/blog' className='lang'> ENG </Link> </li>
                                <li> <span><img src={flag_ar} alt="" /></span><Link to='/blog' className='lang'> AR </Link> </li>
                                <li> <span><img src={flag_de} alt="" /></span><Link to='/blog' className='lang'> DE </Link> </li>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className='accordion'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel6bh-content"
                                id="panel6bh-header"
                                className='accordionSummary'
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0, fontSize: '14px', fontWeight: '600' }}>
                                    <li><Link to='/blog'> USD <BiChevronDown /></Link></li>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='accDetails'>
                                <li> <Link to='/'>GBP</Link></li>
                                <li> <Link to='/'>USD</Link></li>
                                <li> <Link to='/'>EUR</Link></li>
                                <li> <Link to='/'>DKK</Link></li>
                                <li> <Link to='/'>ARS</Link></li>
                                <li> <Link to='/'>CNY</Link></li>
                                <li> <Link to='/'>BRL</Link></li>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
                {/* ./////....//////// */}

                <div className="selecet__input">
                    <div className="input__navbar">
                        <select name="" id="select__category">
                            <option value="all-categories">All Categories</option>
                            <option value="">Accessories</option>
                            <option value="">Basketball</option>
                            <option value="">Customise</option>
                            <option value="">Decor</option>
                            <option value="">Dining & Kitchen</option>
                            <option value="">Exercise</option>
                            <option value="">Girls</option>
                            <option value="">Lifestyle</option>
                            <option value="">Lighting</option>
                            <option value="">Living Room</option>
                            <option value="">Office Furniture</option>
                            <option value="">Outdoor & Gift</option>
                            <option value="">Running</option>
                            <option value="">Sectional Sofas</option>
                            <option value="">Tables & Chair</option>
                            <option value="">Top Selling</option>
                            <option value="">Training</option>
                        </select>

                        <input
                            className='searchProductsInp'
                            type="text"
                            placeholder='Search for products...'

                        />
                        <button className='navbar__btn' type='button'> <span className='searchSp'>Search</span> <BiSearch /></button>
                    </div>
                </div>

                {/* header__right */}
                <div className="header__right">
                    <div className="link_navbar" onClick={handlePopUp}>
                        <div className="user navbar__icons">
                            <BiUser />
                        </div>
                        <div className="register__login">
                            <span className='top-span'>Login</span>
                            <h4>Login/Register</h4>
                        </div>
                    </div>
                    {/* wishlist */}
                    <div className="navbar__wishlist" onClick={handleWishList}>
                        <div className="wishlist__heart navbar__icons">
                            <BiHeart className='biHeart' /> <sup>0</sup>
                        </div>
                        <div className="favorite">
                            <span className="top-span">Favorite</span>
                            <h4>My Wishlist</h4>
                        </div>
                    </div>

                    {/* shoplist */}
                    <div className='navbar__shopList' onClick={handleShopList}>
                        <div className="shopCart navbar__icons">
                            <BiShoppingBag /> <sup>{cart.cartItems.length}</sup>
                        </div>
                        <div className="yourCart">
                            <span className='top-span'>Your Cart</span>
                            <p className="shopping-price">
                                $0.00
                            </p>
                        </div>
                    </div>
                </div>

                {/* register popUp */}
                <div className={popUp ? 'registerPopUp' : 'registerPopUp active'}>
                    <span className='bix' onClick={handlePopUp}>
                        <BiX />
                    </span>
                    <RegisterPopUp />
                </div>

                {/* wishlist popUp */}
                <div className={wishList ? "popUp__wishlist active" : "popUp__wishlist"}>
                    <div className="wishlist__title">
                        <p className="titile">Wishlist</p>
                        <div className="bix">
                            <BiX className='bix1' onClick={handleWishList} />
                        </div>
                    </div>
                    <Wishlist />
                </div>

                {/* shoplist popUp */}
                <div className={shopList ? "shopList__popUp active" : "shopList__popUp"}>
                    <div className="shopList__title">
                        <p className="titile">Shopping Cart <span className='numb'>0</span></p>
                        <div className="icon_bix">
                            <BiX className='bix' onClick={handleShopList} />
                        </div>
                    </div> 
                    <ShoppingList />
                    {/* {/* <p className="freeShipping">Spend $500.00 to Free Shipping</p> */}
                </div>

            </div>
        </div>
    )
}

export default Header