import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Assets/Component.css"
import  Home  from "./Component/Home";
import Product from "./Component/Product";
import Products from "./Component/Products";
import ProductDetail from "./Component/ProductDetail";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/productdetail/:productId" element={<ProductDetail/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
