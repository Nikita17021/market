import React from 'react';
import './footer.css';
function Footer() {
  return (
    <div className="footer">
     <div className="column">
       <div className="firstColumn">
           <ul>
                <li className="columnName"><b>О компании</b></li><br></br>
                <li>Наши бренды</li>
                <li>Наши магазины</li>
                <li>Вакансии</li>
                <li>Публичная оферта</li>
                <li>Бонусная программа</li>
                
            </ul>
        </div>
        <div className="secondColumn">
            <ul>
                <li className="columnName"><b>Покупателям</b></li><br></br>
                <li>Правила доставки</li>
                <li>Правила оплаты</li>
                <li>Правила возврата</li>
                <li>Подарочные сертификаты</li>
            </ul>
        </div>                                                                                                          
       <div className="thirdColumn">
           <ul>
                <li className="columnName"><b>Полезная информация</b></li><br></br>
                <li>Размеры</li>
                <li>Популярные вопросы</li>
                <li>Полезные советы</li>
                <li>Блог</li>
            </ul>
        </div>
        <div className="fourthColumn">
           <ul>
                <li className="columnName"><b>375 33 604 11 77</b></li><br></br>
                <li>shop@shop.by</li>
                <li>anothershop@shop.by</li>
            </ul>
        </div>
        <div className="fifthColumn">
            <span><img src="./vk.svg"></img></span> <br></br>
            <span><img src="./facebook.svg"></img></span> <br></br>
            <span><img src="./inst.svg"></img></span> <br></br>
        </div> 
       </div>    
    </div>
  );
}

export default Footer;
