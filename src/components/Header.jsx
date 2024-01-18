import React, { useState } from 'react';
import { Link, Outlet,} from "react-router-dom";

    // const NavList= [
    //     {
    //         name: "ABOUT",
    //         link: "/about",
    //     },

    //     {
    //         name: "ARTICLES",
    //         link: "/article",
    //     },

    //     {
    //         name: "SUBSCRIBE",
    //         link: "/subscribe",
    //     },
    // ];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const Mobilemenu = () => {
        return (
            <div className='flex justify-end items-start w-full h-full'>
                <div
                    id="mobilemenu"
                    className={`flex flex-col backdrop-filter backdrop-blur-2xl p-10 justify-center items-center rounded-lg gap-4 ${
                        isOpen ? 'block' : 'hidden'
                    } md:hidden`}
                >
                    <Link to="/" className="text-stone-500 capitalize font-medium text-l p-3">
                        Home
                    </Link>
                    <Link to="/about" className="text-stone-500 capitalize font-medium text-l p-3">
                    About 
                    </Link>
                    <Link to="/trends" className="text-stone-500 capitalize font-medium text-l p-3">
                        Trends
                    </Link>
                </div>
            </div>
        );
    };

    return (
        <>
            <nav className="bg-blend-color-burn w-full">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-end items-center p-2 lg:gap-8 md:gap-4 sm:gap-2 max-sm:gap">
                        {/* {NavList.map((item) => (
                            <Link to={item.link} key={item.link}>
                                <div className="hidden md:flex flex-wrap justify-center items-center">
                                    <h3 className="text-stone-500 capitalize font-medium text-l lg:text-2xl p-3">{item.name}</h3>
                                </div>
                            </Link>
                        ))} */}
                        <div className='hidden md:flex flex-wrap justify-center items-center'>
                            <Link to="/" className="text-stone-500 font-medium md:text-xl p-3">
                                ABOUT 
                            </Link>
                            <Link to="/about" className="text-stone-500 font-medium md:text-xl p-3">
                                ARTICLES 
                            </Link>
                            {/* <Link to="/trends" className="text-stone-500 border-solid border-black capitalize font-medium md:text-xl p-3">
                                SUBSCRIBE 
                            </Link> */}
                            <button className='border-2 border-stone-500 text-stone-500 font-medium md:text-xl p-2 '>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>

                <div className="md:hidden cursor-pointer pb-2 px-2 flex justify-end" onClick={toggleNav}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-stone-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
            </nav>

            {/* Render Mobilemenu component */}
            <Mobilemenu />

            <Outlet />
        </>
    );
};

export default Header;
