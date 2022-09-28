import React from 'react'
import './details.scss';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';

const Details = () => {

  const { id } = useParams()

  console.log(id);

  const product = products.find(item => item.id === Number(id))


  // const { image, title, price, description } = product;


  return (
    <section id='details'>
      <div className="main-details">
        <div className="left-img">
            <div className="image">
              <img src={product.image} alt="img" />
            </div>
        </div>
        <div className="right-info">
            <p className="title">{product.title}</p>
            <p className="price">
              {product.price}
            </p>
        </div>
      </div>



    </section>
  )
}

export default Details