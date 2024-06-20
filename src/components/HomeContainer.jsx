import React from 'react'
import { FaStore } from 'react-icons/fa';
import milkImg from '../assets/milk.jpg';
import cheeseImg from '../assets/cheese.jpg';
import yogurtImg from '../assets/yogurt.jpg';
import shopImage from '../assets/shop-image.jpg';

const HomeContainer = () => {
    return (
        <>
            <div className='search-bar flex items-center m-auto border rounded-lg bg-blue-100 border-black w-1/2 justify-center '>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="search-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
                <input className='search bg-blue-100 pl-5 w-96 py-2' type="text" placeholder='Search for Products and Categories' />
            </div>
            <div className="pt-24 p-4 flex flex-col m-auto justify-center">
                <div className='border border-blue-400 p-5 w-1/2 rounded-lg flex flex-col justify-center m-auto'>
                    <div className="flex items-center justify-center mb-4">
                        <FaStore className="text-3xl text-black mr-2" />
                        <h2 className="text-2xl font-bold">Our Shop</h2>
                    </div>
                    <div className="bg-white p-2 shadow-md rounded mb-4 justify-center">
                        <img src={shopImage} alt="Shop" className="w-96 h-24 object-cover rounded mb-4 m-auto flex justify-center" />
                        <p className="text-gray-700 flex justify-center">Welcome to our dairy shop!</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-4/5 justify-center m-auto place-content-around ">

                    <ProductCard className="border-2 border-blue-400" title="Lassi" description="Dairyfarm" image={milkImg} />
                    <ProductCard className="border-2 border-blue-400" title="CURD" description="Dairyfarm" image={yogurtImg} />
                    <ProductCard className="border-2 border-blue-400" title="ButterMilk" description="Dairyfarm" image={milkImg} />
                    <ProductCard className="border-2 border-blue-400" title="Rasgulla" description="Dairyfarm" image={cheeseImg} />
                    <ProductCard className="border-2 border-blue-400" title="Butter" description="Dairyfarm" image={yogurtImg} />
                    <ProductCard className="border-2 border-blue-400" title="Buffalo Ghee" description="Dairyfarm" image={yogurtImg} />
                </div>
                <div className='h-24'>
                    <h1 class="categorys-heading py-2 flex justify-center m-auto text-xl">
                        <i class="fa-solid fa-people-group" aria-hidden="true"></i>Meet Our Team
                    </h1>
                    <div className='flex justify-center m-auto'>- - No Team - -</div>
                </div>

                <div class="main-div-total-visits justify-center flex m-auto">
                    <div class="total-viits-div flex">
                        <div class="eye-logo justify-center items-center place-content-center">
                            <svg className='text-blue-600 px-1' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path>
                            </svg>
                        </div>
                        <div class="total-visits-number px-3">
                            <div>
                                <p class="number text-2xl font-bold">264</p>
                            </div>
                            <div>
                                <p class="title text-xl text-slate-500">Total visits</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const ProductCard = ({ title, description, image }) => {
    return (
        <div className="bg-white p-4 shadow-md rounded flex hover:bg-blue-300 cursor-pointer border border-blue-400 mt-11">
            <div className='px-2'>
                <img src={image} alt={title} className="w-full h-32 object-cover rounded mb-4" />
            </div>
            <div className='flex flex-col justify-center items-center m-auto'>   
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700">{description}</p>
                <p className='font-bold'>Rs.25</p>
                <button className='bg-blue-600 text-white text text-xs py-2 px-5 rounded-xl'>ADD TO BAG</button>
            </div>
        </div>
    );
};

export default HomeContainer
