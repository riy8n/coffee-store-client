import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';

const Layouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-7xl  mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layouts;