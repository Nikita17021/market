import React from 'react';
import Header from '../header/header'
import Footer from '../footer/footer.js'
import TeaCategory from '../teaCategory/teaCategory.js'
import ProductCard from '../productCard/productCard'
import './product.css';
function Product() {
    return (
        <div className="wrapper">
        <Header/>
        <ProductCard/>
        <TeaCategory></TeaCategory>
        <Footer></Footer>
       
        </div>
    )}
export default Product;