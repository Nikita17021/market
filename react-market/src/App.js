import React from 'react';
import Header from './components/Header/header.js';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './components/footer/footer.js';
import ProductCard from './components/productCard/productCard.js';
import Catalog from './components/catalog/catalog.js';
import TeaCategory from './components/teaCategory/teaCategory.js';
import Product from './components/Product/product.js';
import HomePage from './components/HomePage/HomePage.js';
import ProductPage from './components/ProductPage/ProductPage.js';
import CataloguePage from './components/CataloguePage/CataloguePage.js';
//import Slider from './components/slider/slider'
function App() {
  return (
    <div className="wrapper">
        <CataloguePage/>
    </div>
    
  );
}

export default App;
