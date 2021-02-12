import React from 'react';
import Header from '../Header/header.js';
import Footer from '../footer/footer.js';
import Catalogue from '../Catalogue/catalogue.js';
import Orders from '../Orders/orders';
import Delivery from '../delivery/delivery'


function CataloguePage() {
    return (
        <div>
            <Header/>
            <Delivery/>
            <Footer/>
        </div>
        )
    }

export default CataloguePage;