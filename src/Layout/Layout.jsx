import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


const Layout = () => {
    const [isDropdown, setIsDropdown] = useState(false);
    const [isModal, setIsModal] = useState(false);
    
    const toggleDropdown = () => setIsDropdown(prev => !prev);
    const toggleModal = () => setIsModal(prev => !prev);
    
    return(
        <div className="bg-gray-300 min-h-screen">
            <Navbar
                isDropdown={isDropdown} 
                toggleDropdown={toggleDropdown}
                isModal={isModal}
                toggleModal={toggleModal}
            />
        <div className="flex">
            <Sidebar/>
            <main className="w-full p-4">
                <Outlet/>
                <div>
                    <slot></slot>
                </div>
            </main>
        </div>
        {isDropdown && (
            <div className="w-[100%] h-[100vh] bg-black/40 opacity absolute top-0 z-9">

        </div>
        ) ||
        isModal && (
            <div className="w-[100%] h-[100vh] bg-black/40 opacity absolute top-0 z-9">

        </div>
        )}
        </div>
    )
}

export default Layout;