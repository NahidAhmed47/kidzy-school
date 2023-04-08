import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>
            <Header></Header>
            <div className='max-w-[1300px] mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;