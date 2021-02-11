import React , {useState} from 'react';
import style from './catalogue.module.scss';

import Filter from "../filter/filter"
import Products from "../products/products"
import InfoList from "../infoList/infoList"

const products = ['./p1.png','./p2.png','./p3.png','./p4.png','./p5.png','./p6.png','./p7.png','./p8.png','./p9.png'];

function Catalogue({productsArray}) {
    const [index , setIndex] = useState(0);
    
    return(
    <div id={style.catalog}>   
        <Filter />
        <div className={style.productCatalog}>
            <InfoList/>
            <Products products={products}/>
        </div>
    </div>  
        );
}
export default Catalogue;