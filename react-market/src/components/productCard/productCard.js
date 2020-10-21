import React from 'react';
import './productCard.css';

import ProductSlider from "../productSlider/productSlider"
function ProductCard() {
    return (
    <div className="productCard">
        <ProductSlider images={['./productimg.png','./productimg2.png','./productimg3.png','./productimg4.png','./productimg5.png']}/>
        <div className="infoAboutProduct">
            <div className="productName"><p>Шу «Айлаошань 0919», 100г, 2016 г. Леопард из серии «Буфан» от TeaShop.by </p></div>
            <div className="vendor"><p><span className="vendorText">Артикул</span><span className="vendorId">005053</span></p></div>
            <div className="priceInfo">
                    <div className="productPrice">
                        <p><b>260р</b><input className="productInput" placeholder="100"></input>гр</p>
                    </div>
                    <div className="productDiscount">
                        <p><span className="discountPrice">320р</span> <span className="productDiscountPercent">45%</span></p>
                    </div>
                </div>
            <div className="addToBasket">
                <div className="buttonBasket"><button>В корзину</button></div>
                <div className="addPack"><p><span className="addPackText">Приобрести упаковку</span><span className="packGramm">(250гр)</span></p></div>
            </div>
            <div className="specifications">
                <div className="leftPartDescription">
                   <div className="marginbottom16px"> <span className="specification">Действие чая</span></div>
                   <div className="marginbottom16px"><span className="specification">Внешний вид</span></div>
                   <div className="marginbottom16px"> <span className="specification">Как заварить</span></div>
                   <div className="marginbottom16px"> <span className="specification">Тип чая</span></div>
                   <div className="marginbottom16px"> <span className="specification">Вкус</span></div></div>
                <div className="rightPartDescription">
                <div className="marginbottom16px"> <span className="teaDescription">Тонизирует, согревает тело</span></div>
                <div className="marginbottom16px">  <span className="teaDescription">Кирпич (спресованный)</span></div>
                <div className="marginbottom16px">  <span className="teaDescription">Идеален для варки на огне</span></div>
                <div className="marginbottom16px">  <span className="teaDescription">Хэйча</span></div>
                <div className="marginbottom16px">  <span className="teaDescription">Пряный, “теплый”</span></div>
                </div>
            </div>
        </div>
    </div>)}
export default ProductCard;