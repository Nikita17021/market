import React from 'react';
import style from './search.module.scss';
function Search() {
    return (

<div className={style.search}>
   <input type="text" className={style.inputForm} placeholder="Поиск Товаров" aria-label="Поиск"/>
</div>
    )};
export default Search;