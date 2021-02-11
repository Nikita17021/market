import React from 'react';
import Header from '../Header/header.js';
import Footer from '../footer/footer.js';
import Catalogue from '../Catalogue/catalogue.js';
import Orders from '../Orders/orders';


function CataloguePage() {
    return (
        <div>
            <Header/>
            <Orders/>
            <Footer/>
        </div>
        )
    }

export default CataloguePage;