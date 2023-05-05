import React from 'react';
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {
    const { registerUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError("password not valid need 8 char ");
      return;
    }
    if ((name, email, password)) {
      registerUser(email, password)
        .then((result) => {
          console.log(result.user);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
    return (
        <div className="flex justify-center">
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input onChange={(e) => setName(e.target.value)} 
                type="text" 
                placeholder="Type Name" 
                className="input input-bordered w-full max-w-xs" required />
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder="Type Email" 
                className="input input-bordered w-full max-w-xs" />
                <label className="label" required>
                    <span className="label-text">Password</span>
                </label>
                <input onChange={(e) => setPassword(e.target.value)}
                type="password" 
                placeholder="Type Password" 
                className="input input-bordered w-full max-w-xs" required />
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input 
                type="text" 
                placeholder="Type here" 
                className="input input-bordered w-full max-w-xs" />
                <button onClick={handleRegistration} 
                className="btn btn-primary mt-4">Sign-Up
                </button>
                <small className='pt-4'>Already Have account? <Link to="/login" className=" text-blue-700">Log-in</Link> </small>
                <p className=' text-red-500'>{error}</p>
            </div>
        </div>
    );
};

export default SignUp;