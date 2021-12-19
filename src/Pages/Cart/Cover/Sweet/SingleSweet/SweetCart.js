import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const SweetCart = () => {
    const [ice, setIce] = useState({})

    const params = useParams();
    console.log(params)

    useEffect(()=>{
        fetch(`https://powerful-brushlands-31626.herokuapp.com/sweets/${params._id}`)
        .then(res => res.json())
        .then(ice => {
          console.log(ice);
        })
    }, [params._id]);
    // console.log(sweet)

    return (
         <div className='container text-center mt-5'>
            <Link to="/home"><button  className='btn-color rounded-pill mb-5 mr-5 btn-size'>Back</button></Link>
            <div className="d-flex justify-content-center text-align-center">
                <img className='w-50 h-50' src="https://i.ibb.co/qmmSZts/sweet3.jpg" alt="" />
                <div className='justify-content-center text-align-center mx-5'>
                    <h4 className='fw-bold'>uehgveuio</h4>
                    <div className='text-color'>siudjvhiuod</div>
                    <div>iojv</div><br/>
                    <button className='btn-color rounded-pill'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default SweetCart
