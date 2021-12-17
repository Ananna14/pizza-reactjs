import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    // sweet-form
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('added sussessfully');
                reset();
            }
            console.log(data)
        })
       
    };
    // sweet-form
    const onSweet = data => {
        console.log(data)
        axios.post('http://localhost:5000/sweets', data)
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
    <div>
        <div className='container'>
            <h2 className='text-center mt-5'>Add Pizza</h2>
            <form className='text-center mt-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='w-50' {...register("name", { required: true, maxLength: 20 })} placeholder='Name' /><br/><br/>
                <input className='w-50' {...register("price")} placeholder='Price'/><br/><br/>
                <textarea className='w-50' {...register("description")} placeholder='Description'/><br/><br/>
                <input className='w-50' {...register("img-url")} placeholder='img-url'/><br/><br/>
                <input type="submit" /><br/><br/>
            </form>
        </div>
   </div>
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
</div>
    )
}

export default AddProduct
