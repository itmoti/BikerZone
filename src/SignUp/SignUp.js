import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [data, setData] = ('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignUpBtn = (data) => {
        // (data) => setData(JSON.stringify(data))
        console.log(data)
    }
    return (
        <div className='text-center my-10 flex justify-center'>
           
            <form className='flex flex-col'
             onSubmit={handleSubmit(handleSignUpBtn)}>
                 <h1 className="text-3xl font-bold mb-5">SignUp</h1>

                <input {...register("Name")} placeholder="Name" className='mb-3 input input-bordered w-full max-w-xs ' />
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
                <p>Already Have a account? <Link className='hover:text-primary underline' to={'/login'}>Login</Link> </p>
                
            </form>
        </div>
    );
};

export default SignUp;