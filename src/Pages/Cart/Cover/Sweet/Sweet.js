import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import SingleSweet from './SingleSweet/SingleSweet'
// import { useEffect, useState } from 'react'

const Sweet = () => {
    const [sweets, setSweet] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/sweets')
        .then(res => res.json())
        .then(data => setSweet(data))
    }, [])
    return (
        <div>
            <h2 className='text-center mt-5 fw-bold product'>Choose your favorite Sweet</h2>
            {
                <Row xs={1} md={2} className="g-4">
                {sweets.map(sweet => <SingleSweet
               key={sweet.name}
                   sweet={sweet}
               ></SingleSweet>)
                }
                </Row>
            }
        </div>
    )
}

export default Sweet
