import React from 'react';
import style from './search.module.scss';
function Search() {
    return (

<div className={style.search}>
   <div><input type="text" className={style.inputForm} placeholder="Поиск Товаров" aria-label="Поиск"/></div>
</div>
    )};
export default Search;