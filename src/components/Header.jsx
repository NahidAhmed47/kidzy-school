import React, { useState } from 'react';
import { BookOpenIcon, UserCircleIcon, Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import {NavLink} from 'react-router-dom';

const Header = () => {
    const [isOpenMenu, setOpenMenu] = useState(false);
    // automatic close responsive navbar
    const toggle = ()=>{
        setOpenMenu(!isOpenMenu)
    }
    return (
        <nav className='flex-center py-3 px-3 md:px-12 border-b'>
            <div className='text-xl md:text-3xl font-bold flex items-center gap-2'>
                <BookOpenIcon className='w-6 h-6 md:w-8 md:h-8 secondary-text-color'></BookOpenIcon>
                <h1 className='primary-text-color'>Kid<span className='secondary-text-color'>zy</span> School</h1>
            </div>
            <span className='lg:hidden' onClick={toggle}>
                <Bars3BottomRightIcon className='w-6 h-6 text-black'></Bars3BottomRightIcon>
            </span>
            <ul className={isOpenMenu ? 'absolute top-14 bg-slate-200 p-5 right-10 items-start flex flex-col gap-2 font-semibold rounded' : 'w-[60%] text-base font-semibold hidden lg:flex justify-between items-center'}>
                <NavLink to="/" onClick={toggle} className={({isActive})=> (isActive ? 'isActive' : '')}>Home</NavLink>
                <NavLink to="/activity" onClick={toggle} className={({isActive})=> (isActive ? 'isActive' : '')}>Activity</NavLink>
                <NavLink to="/departments" onClick={toggle} className={({isActive})=> (isActive ? 'isActive' : '')}>Departments</NavLink>
                <NavLink to="/class" onClick={toggle} className={({isActive})=> (isActive ? 'isActive' : '')}>Class</NavLink>
                <NavLink to="/contract" onClick={toggle} className={({isActive})=> (isActive ? 'isActive' : '')}>Contract</NavLink>
                <div className='flex-center flex-col lg:flex-row gap-3 lg:ml-5'>
                    <NavLink to="/my-account" onClick={toggle} className='flex-center '>
                        <p>My account</p>
                        <UserCircleIcon className='w-6 h-6 primary-text-color ml-2 '></UserCircleIcon>
                    </NavLink>
                    <NavLink to="/registration" onClick={toggle}>
                        <button className='btn'>Registration</button>
                    </NavLink>
                </div>
            </ul>
        </nav>
    );
};

export default Header;