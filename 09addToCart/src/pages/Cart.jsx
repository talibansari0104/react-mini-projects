import React from "react";
import { useSelector } from "react-redux";
import { remove } from "../Redux/Cartslice";
import { useDispatch } from "react-redux";


function Cart(){
    const cartItems = useSelector((state)=>state.cart)

    const dispatch = useDispatch()

    const handleremove=(id)=>{
        dispatch(remove(id))
    }




    return(

        <>
        <h1 className="font-extrabold text-9xl">My collestion</h1>
        <div className="flex flex-wrap justify-center">

            
            {
                cartItems.map((item)=>(
                    <div className="border border-black max-w-80 p-5 m-3 justify-evenly rounded-lg bg-gray-100 border-none" >
                        <img className="w-60 h-60 object-cover m-4 bg-gray-100 " src={item.image} alt="img"/>
                        <h4 className="whitespace-normal break-words font-semibold">{item.title}</h4>
                        <h5 className="font-extrabold mt-3 "> price:{item.price}</h5>
                        <button 
                        onClick={()=>handleremove(item.id)}
                        className="bg-slate-600 p-2 rounded-lg mt-2  text-center text-white font-bold">Remove from Cart</button>


                    </div>
                    
                ))
            }
        </div>
        </>
    )
}

export default Cart