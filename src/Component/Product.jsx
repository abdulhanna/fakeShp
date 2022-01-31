import React, { useEffect, useState } from 'react'
import axios from "axios"
import Products from './Products'

const Product = () => {
    const [data,setData] = useState([])

    const getData = async() =>{
       const res= await axios.get("https://fakestoreapi.com/products");
       const prod = res.data;
       setData(prod)
    //    console.log(prod)

    }

    try{
        getData()
    }catch(error){
        console.log(error)
    }
    
    useEffect(()=>{
        getData();
    },[])
    return (
        <div className="container my-3">
        <h2 className="text-center text-danger">Here is our Products</h2>
        <div className="row">

         {
             data.map((item)=>{
             return (<>
               <Products item={item}/>
             </>)
             })
         }
        </div>
        </div>
    )
}

export default Product
