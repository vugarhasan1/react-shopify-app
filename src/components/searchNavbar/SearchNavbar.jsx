import React from 'react'
import './searchnavbar.scss';
import {BiSearch} from 'react-icons/bi';


const SearchNavbar = () => {
    return (
        <section className=''>
            <div className="wrapperSelectInput container">
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
                        <button className='navbar__btn' type='button'><BiSearch/></button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SearchNavbar