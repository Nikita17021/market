import React, { useState } from "react";
import style from  "./productSlider.module.scss";

function ProductSlider({images}) {
  const [index , setIndex] = useState(0);
  


  return (
    <div className={style.photoExamples}>
      <div className={style.mainProductImg}>
          <img id="mainImg" width="710px" height="392px" src={images[index]}/> 
      </div>
      <div className={style.otherImg}>
      {
            images.map((src,i)=>(
            <img width="126px" height="70px" className={`${style.productImg} ${index===i ? style.selectedImg : ""}`} src={src} onClick={()=>setIndex(i)}/>
            ))
        }

      </div>
    </div>
  );
  
    
  
}
export default ProductSlider;
