import React , {useState} from 'react';
import style from './infoList.module.scss';

function InfoList() {

    return(
        <div className={style.infoList}>
                <div className={style.amountBlock}><span className={style.allProducts}>Все товары</span><span className={style.amount}>85</span></div>
                <div className={style.filterBlock}>
                    <details>
                    <summary className={style.filterName}>По популярности</summary>
                    <div className={style.summaryList}>
                        <ul>
                            <li className={style.item}>
                                <label className={style.check, style.option}>
                                    <input className={style.checkInput} type="checkbox" />
                                    <span className={style.checkBox}></span>
                                    <span className={style.itemName}>По популярности</span>
                                </label>
                            </li>
                            <li className={style.item}>
                                <label className={style.check, style.option}>
                                    <input className={style.checkInput} type="checkbox" />
                                    <span className={style.checkBox}></span>
                                    <span className={style.itemName}>Дешевые</span>
                                </label>
                            </li>
                            <li className={style.item}>
                                <label className={style.check, style.option}>
                                    <input className={style.checkInput} type="checkbox" />
                                    <span className={style.checkBox}></span>
                                    <span className={style.itemName}>Дорогие</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </details></div>
            </div>
    )
}
export default InfoList;