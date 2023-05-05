import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefInfo = () => {
    const chefInfo = useLoaderData();

    const {chef_name, chef_picture, years_of_experience, num_of_recipes, likes, recipes, description,} = chefInfo;
 
    return (
        <div>
            <img src={chef_picture} alt="" />
            <h2>name: {chef_name}</h2>
            <p>{description}</p>
            <div>
                <p>{years_of_experience}</p>
                <p>{recipes.length}</p>
            </div>
        </div>
    );
};

export default ChefInfo;