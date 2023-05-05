import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          console.log(result.user);
          // navigate("/");
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

    return (
        <div className="flex justify-center">
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder="Type Email" 
                className="input input-bordered w-full max-w-xs" required />
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                placeholder="Enter Password" 
                className="input input-bordered w-full max-w-xs" />
                <button onClick={handleLogin} className="btn btn-primary mt-4">Login</button>
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