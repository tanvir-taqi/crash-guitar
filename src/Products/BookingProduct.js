import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../userContext/UserContext';

const BookingProduct = ({ product ,setCurrentProduct }) => {
    const { user } = useContext(AuthContext)
  
    const { askingPrice, categoryid, postedOnline, condition, description, location, marketPrice, phone, productName, productPhoto, sellerEmail, sellerName, usedYears, _id } = product;

    const { register, handleSubmit, reset, formState: { errors } , isLoading } = useForm();

    const handleBooking = (data) => {

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
        }

            fetch(`http://localhost:5000/products/${_id}`,{
                method:"PUT",
                headers:{
                    'content-type': 'application/json'
                }
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

                            setCurrentProduct(null)
                            isLoading(false)
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


                        <input className='btn  mt-4 bg-cyan-700' value="Book Now" type="submit" />

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