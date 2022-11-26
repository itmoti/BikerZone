import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/AuthContex';
import { FcGoogle } from 'react-icons/fc';
import UseToken from '../../Hooks/UseToken';


const Login = () => {

    const { signIn, googleSignIn } = useContext(UserContext)
        const [loggedInEmail , setLoggedInEmail] = useState('')
     
        const [token] = UseToken(loggedInEmail)



    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignUpBtn = (user) => {

        signIn(user.Email, user.Password)
            .then(data => {
               
               

                setLoggedInEmail(data.user.email)
                navigate('/')
            })
            .catch(err => console.log(err))
    }  


    const handleGoogleSignIn = () => {

        googleSignIn()
            .then(user => {


                const userInfo = {
                    name: user.user.displayName,
                    email: user.user.email,
                    seller: false
                }
                fetch('http://localhost:5000/users',
                    {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userInfo)
                    })
                    .then(res => res.json())
                    .then(data => {

                        setLoggedInEmail(user.user.email)
                        console.log(user.user.email)

                   

                    })
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='text-center my-10 flex justify-center'>

            <form className='flex flex-col'
                onSubmit={handleSubmit(handleSignUpBtn)}>
                <h1 className="text-3xl font-bold mb-5">Login</h1>

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
                <input className='btn btn-primary' type="submit" />
                <p>New Here? <Link className='hover:text-primary underline' to={'/signup'}>Sign Up</Link> </p>
                <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary hover:text-white active:text-white '>
                    <FcGoogle className='mr-3'></FcGoogle>
                    Google</button>

            </form>
        </div>
    );
};

export default Login;