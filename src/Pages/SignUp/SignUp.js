import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/AuthContex';
import { FcGoogle } from 'react-icons/fc';
import useToken from '../../Hooks/UseToken';


const SignUp = () => {
    const [loggedInEmail, setLoggedInEmail] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const [token] = useToken(loggedInEmail)
    const navigate = useNavigate()
    if (token) {
        navigate('/')
    }
    const { signup, updateFullProfile, googleSignIn } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignUpBtn = (user) => {
        setError('')
        setSuccess('')


        signup(user.Email, user.Password)
            .then(data1 => {
                console.log(data1)
                const info = {
                    displayName: user.Name
                }
                var role = "buyer"
                if (user.seller) {
                    role = 'seller'
                }
                updateFullProfile(info)
                    .then(data2 => {
                        const userInfo = {
                            name: user.Name,
                            email: user.Email,
                            role: role

                        }
                        fetch('https://bikezone-serverside-itmoti.vercel.app/users',
                            {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(userInfo)
                            })
                            .then(res => res.json())
                            .then(data3 => {
                                console.log(data3)
                                setLoggedInEmail(user.Email)
                                setSuccess(data1.message)

                            })

                    })
                    .catch(error => {
                        setError(error.message)
                        console.log(error)
                    })

            })
            .catch(err => console.log(err))
    }
    const handleGoogleSignIn = () => {
        setError('')
        setSuccess('')
        googleSignIn()
            .then(data => {
                console.log(data)
                console.log(data.user.displayName)
                const userInfo = {
                    name: data.user.displayName,
                    email: data.user.email,
                    role: "buyer"
                }
                setLoggedInEmail(data.user.email)
                fetch('https://bikezone-serverside-itmoti.vercel.app/users',
                    {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userInfo)
                    })
                    .then(res => res.json())
                    .then(data2 => {
                        console.log(data2)
                        setSuccess(data.message)


                    })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }
    return (
        <div className='text-center my-10 flex justify-center'>

            <form className='flex flex-col'
                onSubmit={handleSubmit(handleSignUpBtn)}>
                <h1 className="text-3xl font-bold mb-5">SignUp</h1>

                <input {...register("Name")} placeholder="Name" className='mb-3 input input-bordered w-full max-w-xs ' required />
                {errors.name && <p role="alert">{errors.name?.message}</p>}
                <input {...register("Email")} placeholder="Email" type='email' className='mb-3 input input-bordered w-full max-w-xs ' required />
                {errors.email && <p role="alert">{errors.email?.message}</p>}

                <input {...register("Password")} placeholder="Password" className='mb-3 input input-bordered w-full max-w-xs ' required />
                {errors.password && <p role="alert">{errors.password?.message}</p>}




                <div >
                    <label className="label cursor-pointer flex  mx-auto ">
                        <span className="label-text font-semibold">Become Seller</span>
                        <input {...register('seller')} type="checkbox" className="toggle text-xs" />
                    </label>
                </div>
                <input className='btn btn-primary text-white' type="submit" value={'Sign Up'} />
                {error && <p className='text-error'>{error}</p>}
                {success && <p className='text-success'> {success}</p>}
                <p className='my-2'>Already Have an account? <Link className='hover:text-primary underline' to={'/login'}>Login</Link> </p>
                <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary hover:text-white active:text-white '>
                    <FcGoogle className='mr-3'></FcGoogle>
                    Google</button>
            </form>

        </div>
    );
};

export default SignUp;