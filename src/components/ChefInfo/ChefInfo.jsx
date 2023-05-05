import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefInfo = () => {
    const chefInfo = useLoaderData();
    
    const {chef_name} = chefInfo;
 
    return (
        <div>
            <h2>name: {chef_name}</h2>
        </div>
    );
};

export default ChefInfo;