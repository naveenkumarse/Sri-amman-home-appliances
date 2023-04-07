import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { Link } from "react-router-dom";


const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="flex justify-between items-center flex-wrap h-42 relative bg-stone-300">
            {/* <img className=" ml-5" alt="kec logo" style={{width:"calc(100%*0.09)"}} src = {keclogo} ></img> */}
            <div className="text-dark flex justify-between items-center h-24 w-4/5 max-w-[1240px] ">

                <Link to="/"><h1 className="w-full text-2xl md:text-4xl  font-bold px-9 font-poppins "> Sri Amman Home Appliances </h1></Link>

                <ul className="hidden md:flex ">
                    <li className="p-4"><Link to="/">Home</Link></li>
                    <li className="p-4"><Link to="/">Events</Link></li>
                    <li className="p-4"><Link to="/">About</Link></li>
                    <li className="p-4"><Link to="/">Login/Register</Link></li>
                </ul>
                <div onClick={handleNav} className='block md:hidden '>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

                </div>
                <div className={nav ? 'z-10 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 text-white' : 'fixed left-[-100%]'}>
                    <h1 className="w-full text-2xl font-bold  m-2 font-poppins "> Sri Amman Home Appliances </h1>
                    <ul className="uppercase p-4">
                        <li className="p-4 border-b border-gray-600"><Link to="/">Home</Link></li>
                        <li className="p-4 border-b border-gray-600"><Link to="/">Event</Link></li>
                        <li className="p-4 border-b border-gray-600"><Link to="/">Login/register</Link></li>
                        <li className="p-4"><Link to="/">Others</Link></li>
                    </ul>
                </div>
            </div>
            {/* <img className="mr-5" alt="club logo" style={{width:"calc(100%*0.09)"}} src = {logo}></img> */}
        </div>
    )
}

export default NavBar;