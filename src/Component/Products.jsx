import React from 'react'
import { Link } from 'react-router-dom';


const Products = ({item}) => {
// console.log(item);
    return (
       
             <div className="col-lg-4" >
               <div className="card mt-2 pt-4 px-4 text-center">
                <img className="img-fluid" src={item.image} alt={item.title} />
                 <div className="card-body">
                     <h4 className="card-title mt-2 text-center ">{item.title}</h4>
                    <h5 className="text-info text-center my-3"><span className="text-dark">Category </span> {item.category}</h5>
                   <p className="card-text text-danger px-1"> Price {item.price}$</p>

                   <Link to={`/productdetail/${item.id}`}><button className="btn btn-outline-info text-center "> Read more</button></Link>

             </div>
         </div>

             </div>
       
    )
}

export default Products
