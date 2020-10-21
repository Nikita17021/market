import React from 'react';
import './filter.scss';


function Filter() {
    return (
        <div className="filter">
            <div className="filterItem">
                <details>
                    <summary className="filterName">Улун</summary>
                    <div>
                        <ul>          
                            <li className="item">
                                <label className='check option'>
                                    <input className="checkInput" type="checkbox" />
                                    <span className="checkBox"></span>
                                    Улун
                                </label>
                            </li>
                        </ul>
                    </div>
                </details>
            </div>
            
            <div className="clearButton">
                <button>Очистить фильтры</button>
            </div>
        </div>
    )
}
export default Filter;