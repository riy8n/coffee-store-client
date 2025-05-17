import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffee=useLoaderData()


 const {photoUrl,
        price,
        category,
        _id,
        chef,
    
taste,
name}=coffee;

    return (
        <div className=' flex my-10 justify-around items-center border-2 border-[#F4F3F0]
        py-3'>
            <div>
                <img src={photoUrl} alt="" />
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <p><strong>Chef:</strong> {chef}</p>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Taste:</strong> {taste}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Details:</strong> {coffee.details}</p>
            </div>
        </div>
    );
};

export default CoffeeDetails;