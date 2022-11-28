import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/AuthContex';
import { FcGoogle } from 'react-icons/fc';
import UseToken from '../../Hooks/UseToken';


const Login = () => {
    const navigate = useNavigate()


    const { signIn, googleSignIn } = useContext(UserContext)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [loggedInEmail, setLoggedInEmail] = useState('')
    console.log('loggedin email', loggedInEmail)
    const [token] = UseToken(loggedInEmail)
    console.log(token)
    if (token) {
        navigate('/')
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignUpBtn = (user) => {
        setSuccess('')
        setError('')
        setLoggedInEmail('')
        signIn(user.Email, user.Password)
            .then(data => {
                setSuccess(data.message)
                console.log('my query', data.user.email)
                setLoggedInEmail(data.user.email)

            })
            .catch(err => {
                console.log(err)
                setError(err.message)
            })
    }


    const handleGoogleSignIn = () => {
        setSuccess('')
        setError('')

        googleSignIn()
            .then(user => {


                const userInfo = {
                    name: user.user.displayName,
                    email: user.user.email,
                    seller: false
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
                    .then(data => {

                        setLoggedInEmail(user.user.email)
                        console.log(user.user.email)
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
                <h1 className="text-3xl font-bold mb-5">Login</h1>

                {errors.name && <p role="alert">{errors.name?.message}</p>}
                <input {...register("Email")} placeholder="Email" type='email' className='mb-3 input input-bordered w-full max-w-xs ' required />
                {errors.email && <p role="alert">{errors.email?.message}</p>}

                <input {...register("Password")} placeholder="Password" className='mb-3 input input-bordered w-full max-w-xs ' required />
                {errors.password && <p role="alert">{errors.password?.message}</p>}




                <div >

                </div>
                <input className='btn btn-primary text-white' type="submit" value={'Login'} />
                <p>New Here? <Link className='hover:text-primary underline' to={'/signup'}>Sign Up</Link> </p>
                {error && <p className='text-error'>{error}</p>}
                {success && <p className='text-success'> {success}</p>}
                <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary hover:text-white active:text-white '>
                    <FcGoogle className='mr-3'></FcGoogle>
                    Google</button>

            </form>
        </div>
    );
};

export default Login;