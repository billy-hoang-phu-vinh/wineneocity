import React, { useState} from "react";
import TopPromotion from './HeaderComponent/TopPromotion';
import HeaderNavigation from './HeaderComponent/HeaderNavigation';
import HeaderCategory from './HeaderComponent/HeaderCategory';
function Heading() {
  
  
  return (
    <div className="header-container header-wrap">
      <TopPromotion/>
      <HeaderNavigation/>
      <HeaderCategory/>
     
    </div>
  );
}
export default Heading;
