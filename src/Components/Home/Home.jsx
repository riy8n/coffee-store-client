import React, { useState } from 'react';
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import {  useLoaderData } from 'react-router';

const Home = () => {
    const initialCoffees=useLoaderData()
    const [coffees,setCoffees]=useState(initialCoffees)
    
    return (
        <div className=''>
         
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                 {
                     coffees.map(coffee => <CoffeeCard 
                         key={coffee._id} 
                         coffees = {coffees} 
                          setCoffees = {setCoffees}
                         coffee={coffee}></CoffeeCard>)
                 }             </div>
        </div>
    );
};

export default Home;
