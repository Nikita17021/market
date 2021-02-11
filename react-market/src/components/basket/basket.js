import React from 'react';
import style from './basket.module.scss';
function Basket() {
    return (
        <div className={style.basket}>
            <div className={style.shoppingCart}><img src="./Shoppingcart.svg"></img></div>
            <div className={style.things}><p>15</p></div>
        </div>
    )};
export default Basket;