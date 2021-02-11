import React, { useState } from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import style from  './filter.module.scss';


function Filter() {

    return (
        <div className={style.filter}>
            <div className={style.filterItem}>
                <details>
            <summary className={style.filterName}><span  className="summaryText">Улун</span></summary>
                    <div>
                        <ul>          
                                <li className={style.item}>
                                <label className={style.check, style.option}>
                                    <input className={style.checkInput} type="checkbox" />
                                    <span className={style.checkBox}></span>
                                    <span  className={style.itemName}>Улун</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </details>
            </div>
            <div className={style.clearButton}>
                <button>Очистить фильтры</button>
            </div>
        </div>
    )
}
export default Filter;