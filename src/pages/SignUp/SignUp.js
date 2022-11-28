import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../componenets/LoadingSpinner';
import { AuthContext } from '../../userContext/UserContext';


const SignUp = () => {
    const { createUser, userUpdate, setLoading, loading } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState('')
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";



    const imagebbKey = process.env.REACT_APP_image_key
  

    const handleSignUp = data => {
        setLoading(true)
        if (data.password !== data.confirm) {
            return setErrorMsg("Password did not match")
        } else {
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
                    
                    if (imgData.success) {
                        createUser(data.email, data.password)
                            .then(result => {
                                const user = result.user;

                                const currentUser = {
                                    email: user.email
                                }
                                fetch('https://crash-guitar-server.vercel.app/jwt', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(currentUser)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        
                                        localStorage.setItem('crashGuitarToken', data.token)
                                     
                
                                    })
                                const userInfo = {
                                    displayName: data.name,
                                    photoURL: imgData.data.url
                                }
                                userUpdate(userInfo)
                                    .then(() => {
                                        const dbProfile = {
                                            name: data.name,
                                            email: data.email,
                                            role: data.role,
                                            img: imgData.data.url
                                        }

                                        addUserToDb(dbProfile)
                                    })
                                    .catch(err => console.log(err));
                            })
                            .catch(error => {
                                console.log(error)

                            });
                    }
                })
        }
    }

    const addUserToDb = (dbprofile) => {

        fetch('https://crash-guitar-server.vercel.app/allusers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dbprofile)
        })
            .then(res => res.json())
            .then(data => {
                
                setLoading(false)
                navigate('/')
            })
    }

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className=" py-32 w-full flex justify-center">
            <div className='p-10 bg-cyan-200 w-96'>
                <h1 className="text-center font-bold text-2xl">Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>


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

                    <p>{errorMsg}</p>

                </form>
                <h4>Already Have an Account? <Link to='/login' className='text-cyan-700'>Sign In</Link></h4>
            </div>

        </div>
    );
};

export default SignUp;