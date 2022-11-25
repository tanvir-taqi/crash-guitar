import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../componenets/LoadingSpinner';
import { AuthContext } from '../../userContext/UserContext';


const AddProduct = () => {
    const { user, loading } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [categories, setCategories] = useState([])
    const navigate = useNavigate();
    const [productAddLoading, setProductAddLoading] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => {

                setCategories(data)
            })
    }, [])

    const imagebbKey = process.env.REACT_APP_image_key

    const handleAddProduct = (data) => {
        setProductAddLoading(true)
        const date = new Date()
        const dateTime =  format(date , 'PP')
        const image = data.img[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imagebbKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                const productPhoto = imgData.data.url

                const product = {
                    productName: data.product,
                    productPhoto,
                    marketPrice: data.mPrice,
                    askingPrice: data.aPrice,
                    sellerName: data.name,
                    sellerEmail: data.email,
                    categoryid: data.category,
                    usedYears: data.years,
                    condition: data.condition,
                    location: data.location,
                    phone: data.phone,
                    description: data.description,
                    postedOnline: dateTime,
                    status: "Available"

                }
                

                addProductToDB(product);
            })
            .catch(err => console.log(err))
    }


    const addProductToDB = (product) => {
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                toast("Congratulations! You have successfully added the product")
                reset()
                setProductAddLoading(false)
            })
            navigate('/myproducts')
    }

    if (loading || productAddLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className=" py-20 w-full  flex justify-center">
         
            <div className='p-10 bg-cyan-200'>
                <h1 className="text-center font-bold text-2xl">Add A Product</h1>

                <form onSubmit={handleSubmit(handleAddProduct)} >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Seller Name</span></label>
                            <input type="text" defaultValue={user?.displayName} readOnly {...register("name", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Seller Email</span></label>
                            <input type="email" defaultValue={user?.email} readOnly {...register("email", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Product Name</span></label>
                            <input type="text"  {...register("product", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.product && <p className='text-red-500'>{errors.product.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Product Image</span></label>
                            <input type="file" {...register("img", {
                                required: "Image is Required"
                            })} className=" file-input file-input-bordered  file-input-info w-full max-w-xs" />
                            {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Category</span></label>
                            <select
                                {...register('category', { required: true })}
                                className="select  w-full max-w-xs">
                                {
                                    categories.map(ct => <option
                                        key={ct._id}
                                        value={ct._id}
                                    >{ct.category}</option>)
                                }
                            </select>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Market Price <small>in $</small></span></label>
                            <input type="number" {...register("mPrice", {
                                required: "Market Price is required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.mPrice && <p className='text-red-500'>{errors.mPrice.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Asking Price <small>in $</small></span></label>
                            <input type="number" {...register("aPrice", {
                                required: "Asking Price is required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.aPrice && <p className='text-red-500'>{errors.aPrice.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Year Of Purchase </span></label>
                            <input type="text" {...register("years", {
                                required: "Years Of Purchase is required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.years && <p className='text-red-500'>{errors.years.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Condition</span></label>
                            <select
                                {...register('condition', { required: true })}
                                className="select  w-full max-w-xs">
                                <option value="excellent">Excellent</option>
                                <option value="good">Good</option>
                                <option value="fair">Fair</option>
                                <option value="moderate">Moderate</option>
                                <option value="bad">Bad</option>
                            </select>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Location </span></label>
                            <input type="text" {...register("location", {
                                required: "Location is required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Phone Number </span></label>
                            <input type="text" {...register("phone", {
                                required: "Phone Number is required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Description</span></label>
                            <textarea {...register("description", {
                                required: "Description is required"
                            })} className="input input-bordered w-full h-24 p-2 max-w-xs"></textarea>
                        </div>

                    </div>
                    <input className='btn w-full my-6 bg-cyan-700 hover:bg-cyan-600 hover:text-black' value="Add Product" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddProduct;