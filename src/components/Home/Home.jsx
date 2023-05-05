import React, { useEffect, useState } from 'react';
import Chefs from '../Chefs/Chefs';

const Home = () => {
    const [chefData, setChefData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/data")
            .then(res => res.json())
            .then(data => setChefData(data))
    })

    return (
        <div>
            <div className="carousel w-full my-10 rounded-md ">
                <div id="slide1" className="carousel-item relative w-full  bg-[url('/banners/01.jpg')]">
                    <div className=" w-full h-[600px] bg-gradient-to-r from-purple-500 t0-white-200 py-auto">
                        <h2 className=' text-3xl font-bold'>Delicious food is my Passion</h2>
                        <p className=' font-medium'>I believe in its power to nourish, sustain, delight, and bring people together. I use only the highest quality ingredients</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full bg-[url('/banners/02.jpg')]">
                    <div className=" w-2/4 h-96 bg-gradient-to-r from-purple-500 t0-white-200">
                        <h2 className=' text-3xl font-bold'>Welcome & Enjoy World-Class Cuisine</h2>
                        <p className=' font-medium'>Family dinners, date nights, brunches, parties, get-togethers, and even meals for the entire week.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full bg-[url('/banners/03.jpg')]">
                    <div className=" w-2/4 h-96 bg-gradient-to-r from-purple-500 t0-white-200 py-10">
                        <h2 className=' text-3xl font-bold'>We'll Take Care Of All The Details</h2>
                        <p className=' font-medium'>Think back to your last party. It was probably a great time with amazing friends.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className=' grid grid-cols-3 gap-4'>
                {
                    chefData.map(chef => <Chefs
                        key={chef.id}
                        chef={chef}
                    >
                    </Chefs>
                    )
                }
            </div>


        </div>
    );
};

export default Home;