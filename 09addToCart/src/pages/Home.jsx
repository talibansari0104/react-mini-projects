import React,{useState, useEffect}from "react";

import { add } from "../Redux/Cartslice";
import { useDispatch } from "react-redux";

function Home(){

    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchProducts = async()=>{
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data)
        }

        
        fetchProducts()

    },[])

    
        const handleAdd=(product)=>{
            dispatch(add(product))
    
    
        }
   






    return(
        <div className="flex flex-wrap justify-center">
            {
                products.map((product)=>(
                    <div className="border border-black max-w-80 p-5 m-3 justify-evenly rounded-lg bg-gray-100 border-none"  key={product.id}>
                        <img className="w-60 h-60 object-cover m-4 bg-gray-100 " src={product.image} alt="img"/>
                        <h4 className="whitespace-normal break-words font-semibold">{product.title}</h4>
                        <h5 className="font-extrabold mt-3 "> price:{product.price}</h5>
                        <button 
                        onClick={()=>handleAdd(product)}
                        className="bg-slate-600 p-2 rounded-lg mt-2  text-center text-white font-bold">Add to cart</button>


                    </div>

                ))

            }
        </div>
        
    )
}

export default Home