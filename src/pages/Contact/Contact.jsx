import { NavLink, Outlet } from "react-router-dom"

const Contact = () => {
    return(
        <div>
            <h1>Contact</h1>
            <div className="space-x-4 mt-[20px]">
                <NavLink to="main" className="text-white bg-blue-500 py-2 px-4 rounded-lg">Asosiy</NavLink>
                <NavLink to="extra" className="text-white bg-blue-500 py-2 px-4 rounded-lg">Qo'shimcha</NavLink>
            </div>
             <div className="mt-4">
                <Outlet />
            </div>
        </div>
    )
}

export default Contact