import React from 'react'
import cover from '../../../images/featured3.jpg'
import './Cover.css'

const Cover = () => {
    return (
        <div>
            <img className='mt-5 img-fluid cover w-100 h-10' src={cover} alt="" />
        </div>
    )
}

export default Cover
