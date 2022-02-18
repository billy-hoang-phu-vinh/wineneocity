import React, { useState} from "react";
import FooterInfor from "./FooterComponent/FooterInfor";
import MainFooter from "./FooterComponent/MainFooter";

function FooterContainer() {
  
  
  return (
    <div className="footer-container">
      <MainFooter/>
      <FooterInfor/>
     
    </div>
  );
}
export default FooterContainer;
