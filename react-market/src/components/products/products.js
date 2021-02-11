import React, { useState } from "react";
import style from  './products.module.scss';


function Products({products}) {
    const [index , setIndex] = useState(0);
    return (
        products.map((src,i)=>(
        <div className={style.products}>
            <div className={`${style.product} ${style.marginForProducts}`} >
                <div className={style.image}><a src="../product/product.js"><img src={src}></img></a></div>
                <div className={style.priceList}>
                    <div className={style.price}>
                        <p><b>260р</b>/100гр</p>
                    </div>
                    <div className={style.discount}>
                        <p><span className={style.discountPrice}>320р</span> <span className={style.discountPercent}>45%</span></p>
                    </div>
                    <div className={style.lilShoppingCart}><img src="./lilshopcart.svg"></img></div>
                </div>
                <div className={style.description}>
                    <p>Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.</p></div>    
            </div>
            </div>
        ))
    )
}

export default Products;