import React, { useState} from "react";
import MiddlePromotion from "./MainPageComponent/MiddlePromotion";
import Slider from "./SliderComponent/Slider";
import ProductPromotionTab from "./ProductComponent/ProductPromotionTab"
function MainContainer() {
  
  
  return (
    <div className="main-container">
      {/* banner Swiper react */}
      <Slider/>
      <MiddlePromotion/>
      <ProductPromotionTab/>
    </div>
  );
}
export default MainContainer;
