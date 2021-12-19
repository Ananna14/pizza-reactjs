import React, { useEffect, useState, useContext } from 'react'
import { Row } from 'react-bootstrap'
import SingleProduct from './SingleProduct/SingleProduct'
import './Products.css'
import Sweet from '../../Cart/Cover/Sweet/Sweet'
import Cover from '../../Cart/Cover/Cover'
import { CartContext } from '../../Cart/CartContext/CartContext'



const Products = () => {
// const {name} = useContext(CartContext);

    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://powerful-brushlands-31626.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2 className='text-center mt-5 fw-bold product'>Choose your favorite</h2>
            {
                <Row xs={1} md={2} className="g-4">
                {products.map(product => <SingleProduct
               key={product.name}
                   product={product}
               ></SingleProduct>)
                }
                </Row>
            }
            <Cover/>
            <Sweet/>
        </div>
    )
}

export default Products
