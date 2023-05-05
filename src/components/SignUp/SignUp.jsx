import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="flex justify-center">
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary mt-4">Sign-Up</button>
                <small className='pt-4'>Already Have account? <Link to="/login" className=" text-blue-700">Log-in</Link> </small>
            </div>
        </div>
    );
};

export default SignUp;