import React from 'react';
import './header.css';
import Search from '../search/search.js'
import Basket from '../basket/basket.js'
function Header() {
  return (
    
    <div className="container-fluid" id="header">
        <div className="headerContainer">
        <div className="header-grid">
            <div className="headerLogo">
                <span><img src="./Logo.svg"/></span>
                <span><img src="./logoName.svg"></img></span>
            </div>
            <div className="catalog">
                    <div className="catalogIcon"><img src="./Menu.svg"></img></div>
                    <div className="catalogName">
                        <p>Чайный каталог</p>
                    </div>
            </div>
            <div className="number"><div><p>375 33 604 11 77</p></div></div>
            <div className="workTime"><div><p>с 10 до 21</p></div></div>
            <div className="delivery"><div><p>Доставка и оплата</p></div></div>
            <div className='searchBlock'>
                <Search/>
            </div>
        <Basket/>
        </div>
        </div>

    </div>

  );
}

export default Header;
  