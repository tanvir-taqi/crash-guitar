import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { BiBullseye, BiSleepy } from 'react-icons/bi';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../componenets/LoadingSpinner';
import { AuthContext } from '../../userContext/UserContext';

const Login = () => {
    const { login, setLoading, loading, socialLogin } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const navigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider()


    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
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
                        console.log(data);
                        localStorage.setItem('crashGuitarToken', data.token)
                        setLoading(false)

                        navigate(from, { replace: true });
                    })


            })
            .catch(error => {
                
                setLoading(false)
                setErrorMsg("Wrong email or password")
            })
    }



    const handleSocialLogin = (provider) => {
        socialLogin(provider)
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
                        console.log(data);
                        localStorage.setItem('crashGuitarToken', data.token)
                        setLoading(false)

                    })
                const dbProfile = {
                    name: user?.displayName,
                    email: user?.email,
                    role: 'buyer',
                    img: user?.photoURL
                }

                fetch('https://crash-guitar-server.vercel.app/allusers', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(dbProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        navigate(from, { replace: true });
                        setLoading(false)
                    })



            })
            .catch(error => {
                setLoading(false)
                console.log(error)
            });

    }

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>

    }

    return (
        <div className=" py-32 w-full flex justify-center">
            <div className='p-10 bg-cyan-200 w-96'>
                <h1 className="text-center font-bold text-2xl">Sign In</h1>
                <form onSubmit={handleLogin}>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="email" className='font-bold'>Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="p-2 w-full" />
                    </div>
                    <div className='flex flex-col my-3'>
                        <div className='flex justify-between items-center'>
                            <label htmlFor="password" className='font-bold'>Password</label>
                            <span onClick={() => setShowPass(!showPass)}>
                                {
                                    showPass ?
                                        <BiSleepy className='text-red-600'></BiSleepy>
                                        :
                                        <BiBullseye className='text-stone-600' ></BiBullseye>

                                }
                            </span>
                        </div>
                        <input type={showPass ? 'text' : 'password'} name="password" id="password" placeholder="Password" className="p-2 w-full" />
                    </div>
                    <p className='text-red-500 font-semibold'>{errorMsg}</p>

                    <input type="submit" className='font-bold text-lg bg-cyan-600 py-2 px-4 rounded-3xl my-3 cursor-pointer' value="Sign In" />
                </form>
                <h4>New to <strong>Crash Guitar?</strong> <Link to='/signup' className='text-cyan-900'>Create Account</Link></h4>
                <button onClick={() => handleSocialLogin(googleProvider)} className='flex items center justify-center px-5 py-2 rounded-full my-5 bg-cyan-600'> <span className='mt-1 mr-4'><FaGoogle></FaGoogle></span> Sign In With Google</button>
            </div>

        </div>
    );
};

export default Login;