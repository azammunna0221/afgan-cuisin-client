import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <div className="navbar bg-slate-400">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Afghan Cuisine</a>
                </div>
                <div className="flex-none gap-2">
                    <div className=" pr-6">
                       <ul className='flex gap-4 text-xl font-semibold pr-6'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        </ul> 
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="./images/stock/photo-1534528741775-53994a69daeb.jpg "/>
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><Link to="/login">Log-in</Link></li>
                            <li><Link to="/signUp">Sign-Up</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <h2></h2>
            
            
            
            
        </div>
    );
};

export default Header;