import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import AddProductService from './AddProductService';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
   
    // sweet-form
    const onSweet = data => {
        console.log(data)
        axios.post('https://powerful-brushlands-31626.herokuapp.com/sweets', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('added sussessfully');
                reset();
            }
            console.log(data)
        })
       
    };

    return (
<div className='justify-content-center text-align-center'>
      {/* 2nd-from */}
    <div>
        <div className='container'>
            <h2 className='text-center mt-5'>Add Sweet</h2>
            <form className='text-center mt-5' onSubmit={handleSubmit(onSweet)}>
                <input className='w-50' {...register("name", { required: true, maxLength: 20 })} placeholder='Name' /><br/><br/>
                <input className='w-50' {...register("price")} placeholder='Price'/><br/><br/>
                <textarea className='w-50' {...register("description")} placeholder='Description'/><br/><br/>
                <input className='w-50' {...register("img-url")} placeholder='img-url'/><br/><br/>
                <input type="submit" /><br/><br/>
            </form>
        </div>
    </div>
    <AddProductService/>
</div>
    )
}

export default AddProduct
