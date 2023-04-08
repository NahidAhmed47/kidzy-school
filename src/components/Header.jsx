import React from 'react';
import { BookOpenIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex-center py-3 px-3 md:px-12 border-b'>
            <div className='text-xl md:text-3xl font-bold flex items-center gap-2'>
                <BookOpenIcon className='w-6 h-6 md:w-8 md:h-8 secondary-text-color'></BookOpenIcon>
                <h1 className='primary-text-color'>Kid<span className='secondary-text-color'>zy</span> School</h1>
            </div>
            <ul className='flex-center w-[60%] text-base font-semibold'>
                <Link to="/">Home</Link>
                <Link to="/activity">Activity</Link>
                <Link to="/departments">Departments</Link>
                <Link to="/class">Class</Link>
                <Link to="/contract">Contract</Link>
                <div className='flex-center gap-3 md:ml-5'>
                    <Link to="/my-account"  className='flex-center '>
                        <p>My account</p>
                        <UserCircleIcon className='w-6 h-6 primary-text-color'></UserCircleIcon>
                    </Link>
                    <Link to="/registration">
                        <button className='btn'>Registration</button>
                    </Link>
                </div>
            </ul>
        </nav>
    );
};

export default Header;