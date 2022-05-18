import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const {register,formState: { errors },handleSubmit,} = useForm();


    const onSubmit = async(data) => {
        console.log(data);
      };

    return (
        <div>
            <h2>Add Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Name</span>
                </label>
                <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", { 
                    required:{
                        value: true,
                        message: 'Name is required.'
                    },
                    minLength: {
                        value: 3,
                        message: 'Please use your name.'
                    }
                 })}
                />
                <label className="label">
                {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                
                </label>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Email</span>
                </label>
                <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", { 
                    required:{
                        value: true,
                        message: 'Email is required'
                    },
                    pattern: {
                        value: /[a-z0-9]+\.[a-z]{2,3}/,
                        message: 'Email is not valid.'
                    }
                 })}
                />
                <label className="label">
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                
                </label>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Specialization</span>
                </label>
                <input
                type="text"
                placeholder="Specialty"
                className="input input-bordered w-full max-w-xs"
                {...register("specialty", { 
                    required:{
                        value: true,
                        message: 'Specialization is required'
                    },
                 })}
                />
                <label className="label">
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                
                </label>
            </div>

            <input type="submit"  className="btn w-full max-w-xs" value="add" />
          </form>
        </div>
    );
};

export default AddDoctor;