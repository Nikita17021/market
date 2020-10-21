import React from 'react';
import './teaCategory.css';
function TeaCategory() {
    return (
    <div className="teaCategory">
        <div className="categoryName">
            <div className="teaName"><p>Пуэр</p></div>
            <div className="amount"><p>85</p></div>
            <div className="teaLink">Смотреть все товары</div>
        </div>
        <div className="teaBlock">
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
            <div className="product" >
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
        </div>
    </div>
    )}
export default TeaCategory;