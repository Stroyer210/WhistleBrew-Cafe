// import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        document.body.classList.toggle("overflow-hidden");
    }

    return (
        <header className=" mt-10 p-5 text-4xl font-bold bg-transparent absolute w-full z-50">
            <div className="flex justify-between items-center">
                <div className="mx-40">
                    <h1 className=" text-gray-200 text-shadow sen lg:mr-40 xl:mr-40 2xl:mr-72">Whistle & Brew Café</h1>
                </div>
                <nav ref={navRef} className="text-white text-shadow sen">
                    <Link to="/" className=" mr-10 lg:mr-20 cursor-pointer hover:text-yellow-600">HOME</Link>
                    <Link to="/Coffee" className=" mr-10 lg:mr-20 cursor-pointer hover:text-yellow-600">COFFEE</Link>
                    <Link to="/Expresso" className=" mr-10 lg:mr-20 cursor-pointer hover:text-yellow-600">EXPRESSO</Link>
                    <Link to="/Tea" className=" mr-10 lg:mr-20 cursor-pointer hover:text-yellow-600">TEA</Link>
                    <Link to="/Bakery" className=" mr-10 lg:mr-20 cursor-pointer hover:text-yellow-600">BAKERY</Link>
                    <button onClick={showNavbar} className="nav-btn nav-close-btn">
                        <FaTimes/>
                    </button>
                </nav>
                <button onClick={showNavbar} className="nav-btn m-0 inline mr-10">
                <FaBars className="text-white hover:text-yellow-600"/>
                </button>
            </div>

        </header> 
    )
};

export default Navbar;
