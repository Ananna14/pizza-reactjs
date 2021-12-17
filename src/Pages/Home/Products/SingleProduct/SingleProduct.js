import React from 'react'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleProduct.css'

const SingleProduct = ({product}) => {
    const {img, name, description, price} =product;
    return (

<Link to={`/products/${product._id}`} className='card-design mt-5 rounded col-lg-4 col-md-6 col-12'>
        <div>
        <div className='container'>
         <Col>
            <Card className="text-center" style={{ width: '25rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>{price}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
              <span className='bg'>Large</span><br/>
           <div className='card-item mt-3'>
             <span>{price}</span>
             <button className='add-btn fw-bold'>ADD</button>
           </div>
      </Card.Body>
  </Card>
     </Col>
     </div>
        </div>
    </Link>

    )
}

export default SingleProduct
