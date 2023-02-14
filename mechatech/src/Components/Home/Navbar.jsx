import React from "react";
import { RiMenu3Fill } from 'react-icons/ri';
import { RxDividerVertical } from 'react-icons/rx';
import { Link } from "react-router-dom";
import scroll from "./nav";


function Navbar({ setIsOpen }){
    
    return(
        <nav className="fixed w-full h-24 flex items-center justify-between xl:px-10 md:px-8 4xs:px-5 transition duration-700" id="navbar" onScroll={scroll}>
            <div className="">
                <Link to={"/"}><img className="xl:h-9 lg:h-8 md:h-7 4xs:h-5 w-auto" src="https://fantasy.co/assets/logoLight.b0878a7f.svg" alt="" /></Link>
            </div>
            <div className="text-gray-200 flex items-center">
                <button className="hover:text-white font-bold xl:text-xl lg:text-lg md:text-base 3xs:text-sm 4xs:text-xs" type="button" onClick={() => setIsOpen(true)}>
                    All Categories
                </button>
                <RxDividerVertical className="text-white lg:text-4xl 4xs:text-3xl lg:mx-3 sm:mx-2 3xs:mx-1" />
                <RiMenu3Fill className="hover:text-white lg:text-3xl 4xs:text-2xl" type="button"  onClick={() => setIsOpen(true)} />
            </div>
        </nav>
    );
}

export default Navbar;