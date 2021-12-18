import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddProductService = () => {
    const { register, handleSubmit, reset } = useForm();

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
    return (
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
    )
}

export default AddProductService
