import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'


const ProductDetail = () => {
    const [single,setSingle] = useState([])
    const [isLoading,setIsLoading] = useState()
    const{ productId } = useParams();
    // console.log(productId)

    const getSingle = async() =>{
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        const data = res.data
        // console.log(data);
        setSingle(data);

    }
    

    useEffect(()=>{
            if(productId && productId !== ""){
        getSingle();
       }

    },[productId])
    return (
        <div className="container">
           <h4 className="text-info text-center">Single product details</h4> 
           <div className="row">
           {
            console.log(single)
        }
           
           </div>
        </div>
    )
}

export default ProductDetail
