import React, { useEffect, useState } from 'react';
import Chefs from '../Chefs/Chefs';

const Home = () => {
    const [chefData, setChefData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/data")
        .then( res => res.json())
        .then (data => setChefData(data))
    })

    return (
        <div className=' font-extrabold'>
            this is home page.
            {
                chefData.map(chef => <Chefs
                key= {chef.id}
                chef ={chef}
                >
                </Chefs>
                )
            }

            
        </div>
    );
};

export default Home;