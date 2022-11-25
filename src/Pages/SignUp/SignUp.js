import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/AuthContex';
import { FcGoogle } from 'react-icons/fc';


const SignUp = () => {
    const navigate = useNavigate('')
   const {signup , updateFullProfile , googleSignIn} = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignUpBtn = (user) => {
   console.log(user)
       
        
        signup(user.Email , user.Password)
        .then(data => {
            console.log(data)
             const info = {
                displayName : user.Name
             }
            updateFullProfile(info)
            .then(data => {
               const userInfo = {
                name : user.Name ,
                email : user.Email,
                seller : user.seller

               }
              fetch('http://localhost:5000/users' , 
              {
                method : 'POST' , 
                headers : {
                    'content-type' : 'application/json'
                } ,
                body : JSON.stringify(userInfo) 
              })
              .then(res => res.json())
              .then(data => console.log(data))

            })
            .catch(error => console.log(error))

        })
        .catch(err => console.log(err))
    }
    const handleGoogleSignIn = () => {
       
        googleSignIn()
        .then(data => {
            console.log(data)
            console.log(data.user.displayName)
            const userInfo = {
                name : data.user.displayName ,
                email : data.user.email,
                seller : false
                }
              fetch('http://localhost:5000/users' , 
              {
                method : 'POST' , 
                headers : {
                    'content-type' : 'application/json'
                } ,
                body : JSON.stringify(userInfo) 
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
               navigate('/')
              })
        })
        .catch (error => console.log(error))
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
                    <label  className="label cursor-pointer flex  mx-auto ">
                        <span className="label-text font-semibold">Become Seller</span>
                        <input {...register('seller' )} type="checkbox" className="toggle text-xs"  />
                    </label>
                </div>
                <input className='btn btn-primary text-white' type="submit" />
                <p className='my-2'>Already Have an account? <Link className='hover:text-primary underline' to={'/login'}>Login</Link> </p>
                <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary hover:text-white active:text-white '> 
                <FcGoogle className='mr-3'></FcGoogle>
                Google</button>
            </form>
            
        </div>
    );
};

export default SignUp;