import React from 'react';

const Chefs = ({ chef }) => {
    return (
        <div>
            <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={chef.chef_pictures} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{chef.chef_name}</h2>
                        <p>Years of Experience : {chef.years_of_experience}</p>
                        <p>Number Of Recipes : {chef.num_of_recipes}</p>
                        <p>Likes : {chef.likes}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Recipes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chefs;