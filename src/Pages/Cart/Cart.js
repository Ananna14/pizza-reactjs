import React, { useContext } from 'react'
import './Cart.css'
import { CartContext } from './CartContext/CartContext'

const Cart = () => {
    // const {cart} = useContext(CartContext)
    // console.log(cart)

    // useEffect(()=>{
    //     if(!cart.items){
    //        return;
    //     }
    //     fetch('https://powerful-brushlands-31626.herokuapp.com/services/cart-items',{
    //         method:
    //     }
    // },[])
    return (
 <div className='container mt-5'>
     <h2 className='fw-bold fs-4 text-center mt-5'>cart page</h2>
  <table class="table">
  <tbody>
      <tr>
      <th scope="col"><img className='w-25 h-70 number' src="https://i.ibb.co/k8Vpt18/product-1.jpg" alt="" /><span className='number'>Supreme Pizza</span></th>
      <th scope="col"><button className='cart-btn px-4 py-2 rounded-pill text-center'>-</button><b className='px-4 number'>2</b><button className='cart-btn px-4 py-2 rounded-pill'>+</button></th>
      <th scope="col"><span className='number'>$500</span></th>
      <th scope="col"><button className='delete-btn fs-6 rounded-pill'>Delete</button></th>
      </tr>
      <tr>
      <th scope="col"><img className='w-25 h-70 number' src="https://i.ibb.co/k8Vpt18/product-1.jpg" alt="" /><span className='number'>Supreme Pizza</span></th>
      <th scope="col"><button className='cart-btn px-4 py-2 rounded-pill'>-</button><b className='px-4 number'>2</b><button className='cart-btn px-4 py-2 rounded-pill'>+</button></th>
      <th scope="col"><span className='number'>$500</span></th>
      <th scope="col"><button className='delete-btn fs-6 rounded-pill'>Delete</button></th>
      </tr>
  
  </tbody>
  <div className="text-design">
      Grand Total:$ 100
  </div>
  <div>
      <button class="add-btn">Order Now</button>
  </div>
</table>
    {/* <h2 className='fw-bold fs-4 text-center mt-5'>cart page</h2>
    <ul>
        <li>
            <div className='d-flex mt-5'>
               <div>
                   <img className='w-25 h-70' src="https://i.ibb.co/k8Vpt18/product-1.jpg" alt="" />
                    <span className='text-gap text-center'>Supreme Pizza</span>
                </div>
                <div>
                    <button className='cart-btn px-4 py-2 rounded-pill'>-</button>
                    <b className='px-4'>2</b>
                    <button className='cart-btn px-4 py-2 rounded-pill'>+</button>
                </div>
               <span className='number'>$500</span>
               <button className='delete-btn fs-6 rounded-pill'>Delete</button>
            </div>
        </li>
    </ul> */}
</div>
    )
}

export default Cart
