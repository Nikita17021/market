import React from 'react';
import style from './orders.module.scss';
function Orders() {
    return (
        <div className={style.basket}>
            <div className={style.orders}>
                <div className={style.basketNum}><p>Корзина</p><span>2</span></div>
                <div className={style.order}>
                    <div className={style.img}><img src="./basketOrder.png"/></div>
                    <div className={style.description}>
                        <div className={style.price}><span className={style.realCost}>260р</span><span className={style.teaWeight}>/100г</span><span className={style.fakeCost}>320р</span><span className={style.discount}>-18%</span></div>
                        <div className={style.teaDescription}><p>Шу «Айлаошань 0919», 100г, 2016 г. Леопард из серии «Буфан» от TeaShop.by </p></div>
                    </div>
                    <div className={style.weight}><input placeholder="220" type='text'/><p>гр</p></div>
                    <div className={style.cost}><p>520р</p></div>
                    <div className={style.close}><img src="./Vector.svg"/></div>
                </div>
            </div>
            <div className={style.banners}>
                <div className={style.banner1}><img src="./banner2.png"/></div>
                <div className={style.banner2}><img src="./banner1.png"/></div>
            </div>
            <div className={style.finalCost}>
                <div className={style.firstPrice}><span className={style.comText}>Общая сумма</span><span className={style.pricesNums}>1260р</span></div>
                <div className={style.finalDiscount}><span className={style.comText}>Общая скидка</span><span className={style.pricesNums}>-240р</span></div>
                <div className={style.deliveryDiv}><span className={style.delivery}>Доставка курьером</span><span className={style.address}>/ Минск, Скрипникова, 30</span><span className={style.pricesNums}>+150р</span></div>
                <div className={style.finalPrice}><span className={style.finalText}>Итого</span><span className={style.finalNum}>1190р</span></div>
                <div className={style.freeDelivery}><p>Бесплатная доставка при покупке от 1 500р</p></div>
            </div>
            <div className={style.checkout}>
                <div className={style.checkoutName}><p>Оформление заказа</p></div>
                <div className={style.deliveryForm}>
                    <div className={style.name}><span className={style.inputName}><p>Имя</p></span><span className={style.input}><input type="text" name="name"/></span></div>
                    <div className={style.number}><span className={style.inputName}><p>Телефон</p></span><span className={style.input}><input type="text" name="number"/></span></div>
                    <div className={style.comment}><span className={style.inputName}><p>Комментарий</p></span><span className={style.input}><input type="text" name="comment"/></span></div>
                    <div className={style.addressToDelivery}><span className={style.inputName}><p>Адрес доставки</p></span><span className={style.input}><input type="text" name="delivery"/></span></div>
                    <div className={style.buttonAccepted}><button>Оформить</button></div>  
                </div>
            </div>
        </div>
    )};
export default Orders;