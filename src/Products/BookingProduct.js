import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { AuthContext } from '../userContext/UserContext';

const BookingProduct = ({ product ,setCurrentProduct ,setpLoading,stopLoading}) => {
    const { user } = useContext(AuthContext)
    const { askingPrice, categoryid,status, postedOnline, condition, description, location, marketPrice, phone, productName, productPhoto, sellerEmail, sellerName, usedYears, _id } = product;
    const [bookStatus,setBookStatus] = useState(status)
  

    const { register, handleSubmit, reset, formState: { errors }  } = useForm();

    const handleBooking = (data) => {
        setpLoading(true)
        const booking ={
            price:askingPrice,
            sellerEmail,
            sellerName,
            productName,
            buyersName:data.name,
            buyersEmail:data.email,
            phone:data.phone,
            location:data.location,
            productPhoto,
            sellerLocation:location,
            sellersPhone:phone,
            productId: _id
        }

            fetch(`http://localhost:5000/products/${_id}`,{
                method:"PUT",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({status:'Booked'})
            })
            .then(res => res.json())
            .then(data =>{
                
                if(data.acknowledged){

                    fetch(`http://localhost:5000/bookings`,{
                        method:'POST',
                        headers:{
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(booking)
                    })
                    .then(res => res.json())
                    .then(data =>{
                        if(data.acknowledged){
                            toast.success("Congratulations!! You have successfully booked a new product")
                            setCurrentProduct(null)
                            setBookStatus("Booked")
                            stopLoading()
                            reset()
                        }
                    })
                }
            })
    }


    return (
        <div>
            
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                <img src={productPhoto} className='h-32 w-32 rounded-full mx-auto block p-1 border-b-4 border-r-2 border-l-2 border-cyan-700' alt="" />

                    <form onSubmit={handleSubmit(handleBooking)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Name</span></label>
                            <input type="text" {...register("name", {
                                required: "Name is Required"
                            })} defaultValue={user?.displayName} readOnly className="input input-bordered w-full max-w-xs" />

                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input type="email" {...register("email", {
                                required: true
                            })} defaultValue={user?.email} readOnly className="input input-bordered w-full max-w-xs" />
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Product Name</span></label>
                            <input type="text" {...register("pName", {
                                required: true
                            })} defaultValue={productName} readOnly className="input input-bordered w-full max-w-xs" />
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Product Price</span></label>
                            <input type="text" {...register("aPrice", {
                                required: true
                            })} defaultValue={askingPrice} readOnly className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Purchase Year</span></label>
                            <input type="text" {...register("usedYears", {
                                required: true
                            })} defaultValue={usedYears} readOnly className="input input-bordered w-full max-w-xs" />
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Product Description</span></label>
                            <input type="text" {...register("description", {
                                required: true
                            })} defaultValue={description} readOnly className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Phone Number</span></label>
                            <input type="text" {...register("phone", {
                                required: true
                            })}  className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Your Location</span></label>
                            <input type="text" {...register("location", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                            {
                                bookStatus === "Booked" || <input className='btn  mt-4 bg-cyan-700' value="Book Now" type="submit" />
                            }
                        

                    </form>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" onClick={()=>setCurrentProduct(null)} className="btn">X</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingProduct;