import React from "react";
import { NavLink } from "react-router-dom";
import navlinks from "../constants/Navlink";

const Sidebar = () => {
    return (
        <div className="w-[250px] bg-blue-500 h-[92vh] flex flex-col justify-between py-4">
            <div className="grid space-y-4 p-5">
                {navlinks.map((item) => 
                    <NavLink to={item.link} key={item.link} className="text-white flex items-center gap-[12px]"><span>{item.icon}</span>{item.title}</NavLink>
                )}
            </div>
            <div className="w-[90%] grid mx-auto bg-white rounded-lg py-4 px-6">
                <h2 className="font-bold flex mx-auto">CAMIOCA</h2>
                <p className="text-[14px] text-center text-gray-400 ">Version: 1.0.0.11 </p>
            </div>
        </div>
    );
};

export default Sidebar;