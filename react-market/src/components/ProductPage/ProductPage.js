import React from 'react';
import Header from '../Header/header.js';
import Footer from '../footer/footer.js';
import ProductCard from '../productCard/productCard.js';
import TeaCategory from '../teaCategory/teaCategory.js';


function ProductPage() {
    return (
        <div>
            <Header/>
            <ProductCard/>
            <TeaCategory/>
            <Footer/>
        </div>
        )
    }

export default ProductPage;