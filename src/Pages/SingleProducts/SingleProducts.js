import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './SingleProducts.css'

const SingleProducts = () => {
    const [product, setProduct] = useState({})

    const params = useParams();
    console.log(params)


    useEffect(()=>{
        fetch(`http://localhost:5000/services/${params._id}`)
        .then(res => res.json())
        .then(product => {
            // setProduct(product);
            console.log(product);
        })
    }, [params._id]);

    return (
        <div className='container text-center mt-5'>
            <Link to="/home"><button  className='btn-color rounded-pill mb-5 mr-5 btn-size'>Back</button></Link>
            <div className="d-flex justify-content-center text-align-center">
                <img className='w-50 h-50' src="https://i.ibb.co/k8Vpt18/product-1.jpg" alt="" />
                <div className='justify-content-center text-align-center mx-5'>
                    <h4 className='fw-bold'>sdvc</h4>
                    <div>Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto</div>
                    <div>$16.99</div><br/>
                    <button className='btn-color rounded-pill'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProducts
