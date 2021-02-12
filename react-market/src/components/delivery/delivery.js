import React from 'react';
import style from  './delivery.module.scss';
function Delivery() {
  return (
      <div className={style.deliveryInfo}>
        <div className={style.delivery}>
            <div className={style.deliveryDesc}>Доставка</div>
            <div className={style.block2}>
                <img src="./delivery1.png"/>
                <div className={style.blocks}>
                    <span>Оформление заказа</span>
                    <p>Вы можете оформить заказ в нашем интернет-магазине круглосуточно.
                    Обработка оформленных заказов осуществляется ежедневно.
                    Прием заказов по телефону осуществляется ежедневно с 10.00 до 21.00</p>
                </div>
            </div>
            <div className={style.block}>
                <img src="./delivery2.png"/>
                <div className={style.blocks}>
                    <span>Доставка</span>
                    <p>Доставка заказов курьером по г. Минску осуществляется ежедневно.
                    Отправления почты: с понедельника по пятницу включительно. 
                    Заказы, поступившие до 15:00 обрабатываются и доставляются</p>
                </div>
            </div>
            <div className={style.block2}>
                <img src="./delivery4.png"/>
                <div className={style.blocks}>
                    <span>Бесплатная доставка</span>
                    <p>Бесплатная доставка доступна при заказе на сумму более 60 рублей.
                    Доставка возможна курьером по Минску и почтой по РБ. 
                    Мы берем на себя все расходы на упаковку и оплату отправления</p>
                </div>
            </div>
            <div className={style.block4}>
                <img src="./delivery3.png"/>
                <div className={style.blocks}>
                    <span className={style.selfTake}>Самовывоз</span>
                    <p>Вы можете сами забрать Ваш заказ в нашем магазине по адресу пр-т Независимости, 28 (Магазин чая TeaShop). 
                    Заказ можно забрать в течение 7 дней после его оформления на странице корзины сайты</p>
                </div>
            </div>
        </div>
        <div className={style.email}>
            <div>
                <img src="./email.png"/>
                <div className={style.emailText}>Узнавать о скидках первым</div>
                <div className={style.input}><input type='text' placeholder='E-MAIL'/></div>
                <div className={style.sub}><button>Подписаться</button></div>
            </div>
        </div>
        <div className={style.pay}>
            <div className={style.deliveryDesc}>Оплата</div>
        <div className={style.mainBlock}>
            <div className={style.payBlock}>
                <img src="./payblock3.png"/>
                <div className={style.payInfo}>
                    <span>Наличными</span>
                    <p>Оплата наличными возможна при
                    доставке заказа курьером, либо при самовывозе. 
                    При оплате наличными предоставляется кассовый чек</p>
                </div>
            </div>
            <div className={style.payBlock2}>
                <img src='./payblock2.png'/>
                <div className={style.payInfo}>
                    <span>Наложенным платежом</span>
                    <p>Оплата наложенным платежом при доставке заказа почтой. 
                    Оплата будет производится в отделении БелПочты при получении посылки</p>
                </div>
            </div>
            <div className={style.payBlock3}>
                <img src='./payblock1.png'/>
                <div className={style.payInfo}>
                    <span>Банковской картой</span>
                    <p>Платежи по банковским картам осуществляются через систему электронных платежей bePaid</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
};

export default Delivery;