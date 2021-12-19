import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './SingleProducts.css'

const SingleProducts = () => {
    const [pizza, setPizza] = useState({})

    const params = useParams();
    console.log(params)

    // /product/${params._id}

    useEffect(()=>{
        fetch(`http://localhost:5000/singleProduct/${params._id}`)
        .then(res => res.json())
        .then(pizza => {
          setPizza(pizza);
        })
    }, [params._id]);
    // console.log(pizza)

    return (
        <div className='container text-center mt-5'>
            <Link to="/home"><button  className='btn-color rounded-pill mb-5 mr-5 btn-size'>Back</button></Link>
            <div className="d-flex justify-content-center text-align-center">
                <img className='w-50 h-50' src={pizza.img} alt="" />
                <div className='justify-content-center text-align-center mx-5'>
                    <h4 className='fw-bold'>{pizza.name}</h4>
                    <div className='text-color'>{pizza.description}</div>
                    <div>{pizza.price}</div><br/>
                    <button className='btn-color rounded-pill'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProducts
