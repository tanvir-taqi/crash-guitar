import React, { useContext } from 'react';
import useRole from '../hooks/useRole';
import { AuthContext } from '../userContext/UserContext';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import LoadingSpinner from '../componenets/LoadingSpinner';
import useVerified from '../hooks/useVerified';
import { FaCheck } from "react-icons/fa";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product, setProduct }) => {
    const { user } = useContext(AuthContext)
    const [role, roleLoading] = useRole(user?.email)

    const { askingPrice, categoryid, status, postedOnline, condition, description, location, marketPrice, phone, productName, productPhoto, sellerEmail, sellerName, usedYears, _id } = product;
    const [verified, verifyLoading] = useVerified(product?.sellerEmail)

    const handleReportToAdmin=(id)=>{
        console.log(id);
        const confirm = window.confirm('Are you sure you want to report this product to the admin?')
        if(!confirm){
            toast.success("Okay!!")
            return
        }else{
            fetch(`https://crash-guitar-server.vercel.app/reportproducts/${id}`,{
                method:"PUT",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({report:true})
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                toast.error("Reported Successfully!!")
            })
        }
        
    }

    if (roleLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className=''>

            <div className="  p-5 md:p-10 ">
                <div className="grid sm:grid-cols-2 ">

                    <div className=" md:w-96 shadow-lg border p-5">
                        <div className="border-b mb-5 flex justify-between text-sm">
                            <div className="text-cyan-600 flex items-center pb-2 pr-2 border-b-2 border-cyan-600 capitalize">
                                <h1 className="font-bold text-lg inline-block">{productName}</h1>
                            </div>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                            <div className="">
                                <div className=" bg-cover text-center overflow-hidden">
                                    <PhotoProvider>
                                        <PhotoView src={productPhoto}>
                                            <img src={productPhoto} className='h-48 w-48' alt="" />
                                        </PhotoView>
                                    </PhotoProvider>
                                </div>
                                <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                                    <div className="">

                                        <p className="text-gray-700 text-md flex items-center mt-2"><span>Seller: <strong> {sellerName}</strong> </span> {verified && <span className='text-xs mt-1 p-1 bg-blue-600 text-white rounded-full'> <FaCheck></FaCheck > </span>} </p>
                                        <p className="text-gray-700 text-sm  mt-2">Posted for sale: <strong> {postedOnline}</strong></p>

                                        <div className="text-md py-4">
                                            <p className="text-gray-600 text-sm">{description.length > 30 ? `${description.slice(0, 30)}... ` : description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:border-l lg:pl-4">
                                <div className="text-md border-b pb-4 mb-4">
                                    <p className="text-gray-500 text-sm">Condition: <strong>{condition}</strong></p>
                                </div>
                                <div className="text-md border-b pb-4 mb-4">
                                    <p className="text-gray-500 text-sm">Location: <strong>{location}</strong></p>
                                </div>
                                <div className="text-md border-b pb-4 mb-4">
                                    <p className="text-gray-500 text-sm">Market Price: <strong>{marketPrice} $</strong></p>
                                </div>
                                <div className="text-md border-b pb-4 mb-4">
                                    <p className="text-gray-500 text-sm">Asking Price: <strong>{askingPrice} $</strong></p>
                                </div>
                                <div className="text-md border-b pb-4 mb-4">
                                    <p className="text-gray-500 text-sm">Purchase Year: <strong>{usedYears}</strong></p>
                                </div>
                                <div className="text-md border-b pb-4 mb-4">
                                    <p className="text-gray-500 text-sm">Seller Contact: <strong>{phone}</strong></p>
                                </div>



                            </div>
                            {
                                role === 'buyer' && <button onClick={()=>handleReportToAdmin(_id)} className='my-3  capitalize outline-none underline duration-500 hover:underline-offset-2'>Report To Admin</button>
                            }
                            {
                                role === 'buyer' && <Link to={`/product/${_id}`}  className=' my-3  capitalize outline-none underline duration-500 hover:underline-offset-2'>See Details</Link>
                            }
                            
                        </div>
                        {

                            role === 'buyer' ? <label
                                htmlFor="booking-modal"
                                onClick={() => setProduct(product)}
                                className=' btn capitalize outline-none btn-sm border-none w-full bg-cyan-600  font-semibold rounded-full duration-500 hover:text-black duration-500 hover:bg-cyan-400'
                            >Book Now</label> : <p className='text-center bg-cyan-900 rounded-full p-1 text-cyan-600 mx-3 font-bold'> {product.status}</p>
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SingleProduct;