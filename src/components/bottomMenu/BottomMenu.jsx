import React from 'react'
import './bottomMenu.scss';
import {Link} from 'react-router-dom';
import {BiUser, BiGridAlt, BiHomeAlt, BiHeart, BiShoppingBag} from 'react-icons/bi';




const BottomMenu = () => {
    return (
        <section id='bottomMenu'>
            <div className="bottomMenuWrapper">
                <div className="menu__icons">
                    <div className="icon__homePage icon">
                        <BiHomeAlt/>
                    </div>
                    <div className="icon__collection icon">
                        <BiGridAlt/>
                    </div>
                    <Link className="icon__shopList icon" to='/shoplist'>
                        <BiShoppingBag/>
                    </Link>
                    <div className="icon__wishList icon">
                        <BiHeart/>
                    </div>

                    <div className="icon__account icon">
                        <BiUser/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BottomMenu