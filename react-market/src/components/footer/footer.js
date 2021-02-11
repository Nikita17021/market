import React from 'react';
import style from  './footer.module.scss';
function Footer() {
  return (
    <div className={style.footer}>
     <div className={style.column}>
       <div className={style.firstColumn}>
           <ul>
                <li>проспект Независимости, 28</li>
                <li>Минск,<span className={style.columnURL}>метро Октябрьская</span></li>               
            </ul>
        </div>
        <div className={style.secondColumn}>
            <ul>
                <li>375 33 604 11 77</li>
                <li className={style.columnURL}>teashop@teashop.by</li>
                <li className={style.columnURL}>teaspace@teashop.by</li>
            </ul>
        </div>                                                                                                          
       <div className={style.thirdColumn}>
           <ul>
                <li>Интернет-магазин зарегистрирован в Торговом реестре РБ 22/10/2015 г. ИП Клишевский Вадим Станиславович г. Минск, ул. Голубева, 22, корп.1, кв.200. Св-во о регистрации №192236137 выдано 14.03.2014 г.</li>
            </ul>
        </div>
        <div className={style.fourthColumn}>
            <span><img src="./vk.svg"></img></span> <br></br>
            <span><img src="./facebook.svg"></img></span> <br></br>
            <span><img src="./inst.svg"></img></span> <br></br>
        </div> 
       </div>    
    </div>
  );
}

export default Footer;
