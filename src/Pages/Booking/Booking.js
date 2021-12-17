import React from 'react'
import { Link } from 'react-router-dom';

const Booking = ({product}) => {
    const {img, name, description, price} =product;
    return (
        <Link to="products/hcbxj">
            <div className="container mb-5">
         
         <div className="col text-center">
       <div className="col-md-3">
       <div class="card">
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title fw-bold">{name}</h5>
          {/* <h5 class="card-title">{price}</h5> */}
          <p class="card-text">{description}</p>
          <span className='bg'>Large</span><br/>
          <div className='card-item'>
            <span>{price}</span>
            <button className='add-btn fw-bold'>ADD</button>
          </div>
        </div>
      </div>
         </div>
       </div>
       </div>
        </Link>
    )
}

export default Booking
