import FirstChart from "../components/Charts/FirstChart"

const Dashboard = () => {
    return(
       <div className="w-[100%] flex justify-between">
         <div className="w-[90%] grid grid-cols-2 space-x-4 justify-beetwen">
            <div className="bg-white rounded-xl p-5">
                <h2 className="font-bold text-[20px]">Company facts</h2>
                <p className="text-gray-500">Employees</p>
                <FirstChart/>
            </div>
            <div className="bg-white rounded-xl p-5">
                <h2 className="font-bold text-[20px]">Statistics</h2>
                <div>
                    
                </div>
            </div>
            <div>
                salom
            </div>
        </div>
        <div>
            <button className="bg-green-500 rounded-full text-white font-semibold px-4 py-2 text-[14px]">+ Add widget</button>
        </div>
       </div>
    )
}

export default Dashboard;