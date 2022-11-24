import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleAddProduct = (data) => {

    }

    return (
        <div className=" py-32  flex justify-center">
        <div className='p-10 bg-cyan-200'>
            <h1 className="text-center font-bold text-2xl">Add A Product</h1>
            <form onSubmit={handleSubmit(handleAddProduct)}>


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("img", {
                        required: "Image is Required"
                    })} className=" w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Role</span></label>
                    <select
                        {...register('role', { required: true })}
                        className="select  w-full max-w-xs">
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                    </select>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input type="password" {...register("password", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Confirm Password</span></label>
                    <input type="password" {...register("confirm", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.confirm && <p className='text-red-500'>{errors.confirm.message}</p>}
                </div>


                <input className='btn  mt-4 bg-cyan-700' value="Sign Up" type="submit" />

               

            </form>
        </div>

    </div>
    );
};

export default AddProduct;