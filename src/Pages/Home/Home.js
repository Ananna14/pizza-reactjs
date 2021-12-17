import React from 'react'
import banner from '../../images/pizza-3.jpg'
import pizza1 from '../../images/pizza-1.jpg'
import features2 from '../../images/featured2.jpg'
import './Home.css'
import Products from './Products/Products'


const Home = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
           <div class="carousel-inner">
           <div class="carousel-item active">
           <img src={banner} class="d-block w-100" alt="..."/>
           </div>
        <div class="carousel-item">
        <img src={pizza1} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
      <img src={features2} class="d-block w-100" alt="..."/>
      </div>
      </div>
     </div>
     <Products/>
        </div>
    )
}

export default Home
