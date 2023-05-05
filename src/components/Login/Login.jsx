import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex justify-center">
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary mt-4">Login</button>
                <div className='flex flex-row gap-2'>
                <button className="basis-2/4 btn btn-outline mt-4">Gmail</button>
                <button className="basis-2/4 btn btn-outline mt-4">Github</button>
                </div>
                <small className='pt-4'>if not Registered ? <Link to="/signUp" className=" text-blue-700">Sign-Up</Link> </small>
            </div>
        </div>
    );
};

export default Login;