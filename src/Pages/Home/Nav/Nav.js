
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Cart/CartContext/CartContext'

import './Nav.css'

const Nav = () => {

  // const { cart } = useContext(CartContext);
    return (
        <div>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/home" class="nav-link" href="#">Home</Link>
        </li>
 
        <li class="nav-item">
          <Link to="/products" class="nav-link" href="#">Products</Link>
        </li>
        <li class="nav-item">
          <Link to="/dashbord" class="nav-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Dashbord</Link>
          <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <Link to="/admin" class="dash">Admin</Link><br/><br/>
   
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <Link to="/add" class="dash">Add Product</Link>
  </div>
</div>
        </li>
      </ul>
      
    </div>
  </div>
  {/* font-awesome */}
  <Link to="/cart">
    <div className='half-width'>
          {/* <span className='gap'>{cart.totalItems}</span> */}
         <span><i class="fas fa-shopping-cart"></i></span>
    </div>
  </Link>
  {/* <Link className='half-width' to="/login">login</Link> */}
</nav>

        </div>
    )
}

export default Nav
