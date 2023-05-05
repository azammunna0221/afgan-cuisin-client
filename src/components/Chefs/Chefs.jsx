import React from 'react';
import { Link } from 'react-router-dom';

const Chefs = ({ chef }) => {


    return (
        <div>
            <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className=' w-96 h-96' src={chef.chef_picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{chef.chef_name}</h2>
                        <p>Years of Experience : {chef.years_of_experience}</p>
                        <p>Number Of Recipes : {chef.num_of_recipes}</p>
                        <p>Likes : {chef.likes}</p>
                        <div className="card-actions justify-end">
                            <Link to ={`/chefInfo/${chef.id}`}> <button className='btn btn-primary'>View Recipes</button> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chefs;