import React from 'react';
import style from './catalogue.module.scss';

import Filter from "../filter/filter"
import Products from "../products/products"
function Catalogue() {
    return(
    <div id={style.catalog}>   
        <Filter/>
        <div className={style.productCatalog}>
            <div className={style.description}>
                <div className={style.amountBlock}><span className={style.allProducts}>Все товары</span><span className={style.amount}>85</span></div>
                <div className={style.filterBlock}>
                    <details>
                    <summary className={style.filterName}>По популярности</summary>
                    <div className={style.summaryList}>
                        <ul>
                            <li className={style.item}><span>По популярности</span></li>
                            <li className={style.item}><span>Дешевые</span></li>
                            <li className={style.item}><span>Дорогие</span></li>
                        </ul>
                    </div>
                </details></div>
            </div>
            <div className={style.products}>
            <div className="product marginForProducts" >
                <div className="image"><a src="../product/product.js"><img src='./tea1.png'></img></a></div>
                <div className="priceList">
                    <div className="price">
                        <p><b>260р</b>/100гр</p>
                    </div>
                    <div className="discount">
                        <p><span className="discountPrice">320р</span> <span className="discountPercent">45%</span></p>
                    </div>
                    <div className="lilShoppingCart"><img src="./lilshopcart.svg"></img></div>
                </div>
                <div className="description">
                    <p>Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.</p></div>    
            </div>
            <div className="product marginForProducts" >
                <div className="image"><a src="../product/product.js"><img src='./tea1.png'></img></a></div>
                <div className="priceList">
                    <div className="price">
                        <p><b>260р</b>/100гр</p>
                    </div>
                    <div className="discount">
                        <p><span className="discountPrice">320р</span> <span className="discountPercent">45%</span></p>
                    </div>
                    <div className="lilShoppingCart"><img src="./lilshopcart.svg"></img></div>
                </div>
                <div className="description">
                    <p>Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.</p></div>    
            </div>
            <div className="product" >
                <div className="image"><a src="../product/product.js"><img src='./tea1.png'></img></a></div>
                <div className="priceList">
                    <div className="price">
                        <p><b>260р</b>/100гр</p>
                    </div>
                    <div className="discount">
                        <p><span className="discountPrice">320р</span> <span className="discountPercent">45%</span></p>
                    </div>
                    <div className="lilShoppingCart"><img src="./lilshopcart.svg"></img></div>
                </div>
                <div className="description">
                    <p>Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.</p></div>    
            </div>
            <div className="product marginForProducts" >
                <div className="image"><a src="../product/product.js"><img src='./tea1.png'></img></a></div>
                <div className="priceList">
                    <div className="price">
                        <p><b>260р</b>/100гр</p>
                    </div>
                    <div className="discount">
                        <p><span className="discountPrice">320р</span> <span className="discountPercent">45%</span></p>
                    </div>
                    <div className="lilShoppingCart"><img src="./lilshopcart.svg"></img></div>
                </div>
                <div className="description">
                    <p>Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.</p></div>    
            </div>
            <div className="product marginForProducts" >
                <div className="image"><a src="../product/product.js"><img src='./tea1.png'></img></a></div>
                <div className="priceList">
                    <div className="price">
                        <p><b>260р</b>/100гр</p>
                    </div>
                    <div className="discount">
                        <p><span className="discountPrice">320р</span> <span className="discountPercent">45%</span></p>
                    </div>
                    <div className="lilShoppingCart"><img src="./lilshopcart.svg"></img></div>
                </div>
                <div className="description">
                    <p>Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.</p></div>    
            </div>
            <div className="product" >
                <div className="image"><a src="../product/product.js"><img src='./tea1.png'></img></a></div>
                <div className="priceList">
                    <div className="price">
                        <p><b>260р</b>/100гр</p>
                    </div>
                    <div className="discount">
                        <p><span className="discountPrice">320р</span> <span className="discountPercent">45%</span></p>
                    </div>
                    <div className="lilShoppingCart"><img src="./lilshopcart.svg"></img></div>
                </div>
                <div className="description">
                    <p>Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.</p></div>    
            </div>
            </div>
        </div>
    </div>  
        );
}
export default Catalogue;