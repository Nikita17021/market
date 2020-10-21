import React from 'react';
import Header from './components/header/header.js';
import Carousel from 'react-bootstrap/Carousel';
import Head from './components/head/head.js';
import Footer from './components/footer/footer.js';
import Catalog from './components/catalog/catalog.js';
import TeaCategory from './components/teaCategory/teaCategory.js';
import Product from './components/product/product.js';
import Catalogue from './components/catalogue/catalogue.js';
//import Slider from './components/slider/slider'
function App() {
  return (
    <div className="wrapper">
      <Header></Header>  
      <Catalogue/>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
