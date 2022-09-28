import React from 'react'
import './bottomMenu.scss';
import {BiUser, BiGridAlt, BiHomeAlt, BiHeart, BiShoppingBag} from 'react-icons/bi';




const BottomMenu = () => {
    return (
        <section id='bottomMenu'>
            <div className="bottomMenuWrapper">
                <div className="menu__icons">
                    <div className="icon__homePage">
                        <BiHomeAlt/>
                    </div>
                    <div className="icon__collection">
                        <BiGridAlt/>
                    </div>
                    <div className="icon__shopList">
                        <BiShoppingBag/>
                    </div>
                    <div className="icon__wishList">
                        <BiHeart/>
                    </div>

                    <div className="icon__account">
                        <BiUser/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BottomMenu