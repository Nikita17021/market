import React from 'react';
import style from  './header.module.scss';
import Search from '../search/search.js'
import Basket from '../basket/basket.js'
import Catalog from '../catalog/catalog'
function Header() {
  return (
    
    <div className={style.containerFluid} id={style.header}>
        <div className={style.headerContainer}>
        <div className={style.headerGrid}>
            <div className={style.headerLogo}>
                <span><img src="./Logo.svg"/></span>
                <span><img src="./logoName.svg"></img></span>
            </div>
            <div className={style.catalog}>
                    <details className={style.catalogName}>
                        <summary className={style.catalogOpener}>Чайный каталог</summary>
                        <Catalog/>
                    </details>
            </div>
            <div className={style.number}><div><p>375 33 604 11 77</p></div></div>
            <div className={style.workTime}><div><p>с 10 до 21</p></div></div>
            <div className={style.delivery}><div><p>Доставка и оплата</p></div></div>
            <Search/>
            <Basket/>
        </div>
        </div>
    </div>

  );
}

export default Header;
  