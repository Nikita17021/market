import React from 'react';
import './catalog.css';
function Catalog() {
    return (
    <div className="catalogActive">
        <div className="exampleList">
            <ul className="ulList">
                <li className="dropdownItem">Пуэр</li>
                <li className="dropdownItem">Улун</li>
                <li className="dropdownItem">Хэй ча (черный чай)</li>
                <li className="dropdownItem">Красный чай</li>
                <li className="dropdownItem">Зеленый чай</li>
                <li className="dropdownItem">Белый чай</li>
                <li className="dropdownItem">Желтый чай</li>
                <li className="dropdownItem">Связанный чай</li>
                <li className="dropdownItem">Японский чай</li>
                <li className="dropdownItem">Матча</li>
                <li className="dropdownItem">Тайский чай</li>
                <li className="dropdownItem">Индийский чай</li>
                <li className="dropdownItem">Цейлонский чай</li>
            </ul> 
        </div>
        <div className="rareList">
                <ul className="ulList">
                    <li className="dropdownItem">Уишаньский улун</li>
                    <li className="dropdownItem">Гуандунский улун</li>
                    <li className="dropdownItem">Тайваньский улун</li>
                    <li className="dropdownItem">Габа</li>
                    <li className="dropdownItem">Тайский улун</li>
                    <li className="dropdownItem">Все сорта</li>
                </ul>
        </div>
        <div className="productsList">
            <div className="product marginForProducts" >
                <div className="image"><img src='./tea1.png'></img></div>
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
            <div className="product">
                <div className="image"><img src='./tea2.png'></img></div>
                <div className="priceList">
                    <div className="price">
                        <p><b>260р</b>/100гр</p>
                    </div>
                    <div className="discount">
                        <p><span className="discountPrice">320р</span> <span className="discountPercent">45%</span></p>
                    </div>
                    <div className="shoppingCart"><img src="./lilshopcart.svg"></img></div>
                </div>
                <div className="description">
                    <p>Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.</p></div>    
            </div> 
        </div>
    </div>
    )};
export default Catalog;