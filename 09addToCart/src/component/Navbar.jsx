import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar(){

    const items = useSelector((state)=>state.cart)
    return(
        <div className="flex justify-between  bg-gray-500 p-6 rounded-lg text-white">
            <h1>Talib Ansari ka Dukan!!</h1>
            <div>
                <Link className="bg-rose-600 p-2 mx-5 rounded-lg font-bold" to={'/'}> Home </Link>
                <Link className="bg-orange-800 p-2 mx-5 rounded-lg font-bold"  to={'/cart'}>Cart</Link>
                <span className="bg-gray-800 p-2 rounded-lg px-3 font-bold">item:{items.length}</span>
            </div>
        </div>
    )
}

export default Navbar