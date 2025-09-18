import user from "../assets/user.webp"
const Navbar = ({ isDropdown, toggleDropdown, isModal, toggleModal }) => {
   
    return(
        <div className="bg-white h-[76px] w-full flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
                <div onClick={toggleDropdown} className='flex items-center gap-[10px] cursor-pointer'>
                    <img src={user} alt="profile" className="w-[60px]"/>
                <h3  className="font-bold">DOMINIQUE Ch. <span className="text-[12px]">▼</span></h3>
                </div>
                {isDropdown && (
                    <div className='bg-white w-[150px] rounded-xl h-[200px] absolute top-[60px] left-[60px] border border-gray-300 p-2 z-10'>
                        <button onClick={toggleDropdown} className="cursor-pointer font-bold text-red-500 float-right px-3">X</button>
                        <h2>salom</h2>
                    </div>
                )}
                <div className="flex items-center ml-[12px] space-x-4 border border-gray-500 rounded-lg px-2 p-1">
                    <i class='bx bx-search text-[18px]'></i>
                    <input type="text" placeholder="Quick search..." className="outline-none"/>
                </div>
            </div>
            <div onClick={toggleModal} className="px-4 relative cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-red-500 absolute right-4"></div>
                <i class='bx bxs-bell text-2xl text-blue-600 hover:text-blue-500'></i>
            </div>
            {isModal && (
                    <div className='bg-white w-[50%] rounded-xl h-[300px] absolute top-[30%] left-[30%]  border border-gray-300 p-2 z-10'>
                        <button onClick={toggleModal} className="cursor-pointer font-bold text-red-500 float-right px-3">X</button>
                        <div className=" mx-[20px] mt-[50px] flex items-center border border-gray-400 rounded-lg space-x-2">
                            <div className="bg-blue-500 w-3 h-9 rounded-l-md"></div>
                            <h2>sa lom</h2>
                        </div>
                        <div className=" mx-[20px] mt-[10px] flex items-center border border-gray-400 rounded-lg space-x-2">
                            <div className="bg-blue-500 w-3 h-9 rounded-l-md"></div>
                            <h2>salom</h2>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Navbar