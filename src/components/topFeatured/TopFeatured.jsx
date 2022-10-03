import React from 'react'
import './topFeatured.scss';
import { Link} from 'react-router-dom';
import { BiStar, BiHeart, BiChevronRight } from 'react-icons/bi';
import { products } from '../../data/products';




const TopFeatured = () => {

    // const navigate = useNavigate();



    const handleAddToCart = () => {

    }


    return (
        <section id='topFeatured'>
            <div className="main-featured container">
                <div className="capter">
                    <h3>Top Featured Products</h3>
                    <div className="all-products">
                        <Link to='/' className='allPro'>All Products  <BiChevronRight/></Link> 
                    </div>
                </div>

                <div className="main-products">
                    <div className="left-side">
                        {
                            products.slice(10, 11).map((item, index) => (
                                <div className='product-one' key={index} >
                                    <Link className="image" to={`/products/${item.id}`}>
                                        <img src={item.image} alt="" />
                                    </Link>
                                    <div className="item-info">
                                        <Link className="title" to={`/products/${item.id}`}>{item.title}</Link>
                                        <div className="spans">
                                            <span className="stars">
                                                <BiStar />
                                                <BiStar />
                                                <BiStar />
                                                <BiStar />
                                                <BiStar />
                                            </span>
                                        </div>
                                        <p>
                                            <span className='price'>${item.price}</span> <del>$99.00</del>
                                        </p>

                                        <div className="desc">
                                            Designed by Hans J. Wegner in 1949 as one of the first
                                            models created especially for Carl Hansen & Son,
                                            and produced since 1950. The last of a series of...
                                        </div>

                                        <div className="btns">
                                            <button
                                                className='btn-add'
                                                onClick={() => handleAddToCart(item)}>{item.price === '210.00' ? "OUT OF STOCKS " : "ADD TO CARD"}
                                            </button>

                                            <button className='btn-heart'><BiHeart /></button>

                                        </div>
                                    </div>

                                    <div className="overlay"></div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="right-products">
                        {
                            products.slice(4, 8).map((item, index) => (
                                <div className='product-right-side' key={index}>
                                    <div className="image">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="item-info">
                                        <Link className="title" to={`/products/${item.id}`}>{item.title}</Link>
                                        <div className="spans">
                                            <span className="stars">
                                                <BiStar />
                                                <BiStar />
                                                <BiStar />
                                                <BiStar />
                                                <BiStar />
                                            </span>
                                        </div>
                                        <p>
                                            <span className='price'>${item.price}</span>
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default TopFeatured