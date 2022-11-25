import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/AuthContex';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    const {signIn , googleSignIn } = useContext(UserContext)
   const handleGoogleSignIn = () => {
    googleSignIn()
    .then(res => res.json())
    .then(data => console.log(data))
   }
 
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const handleSignUpBtn = (user) => {
        console.log(user.Email)
            
             console.log(user.email)
             signIn(user.Email , user.Password)
             .then(data => {
                 console.log(data)
                 })
             .catch(err => console.log(err))
         }
    return (
        <div className='text-center my-10 flex justify-center'>
           
            <form className='flex flex-col'
             onSubmit={handleSubmit(handleSignUpBtn)}>
                 <h1 className="text-3xl font-bold mb-5">Login</h1>

                {errors.name && <p role="alert">{errors.name?.message}</p>}
                <input {...register("Email")} placeholder="Email" type='email' className='mb-3 input input-bordered w-full max-w-xs ' />
                {errors.email && <p role="alert">{errors.email?.message}</p>}
                
                <input {...register("Password")} placeholder="Password" className='mb-3 input input-bordered w-full max-w-xs ' />
                {errors.password && <p role="alert">{errors.password?.message}</p>}


               
             
                <div >
                    <label  className="label cursor-pointer flex  mx-auto ">
                        <span className="label-text font-semibold">Become Seller</span>
                        <input {...register('seller' )} type="checkbox" className="toggle text-xs"  />
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