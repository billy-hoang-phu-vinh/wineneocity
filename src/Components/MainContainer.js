import React, { useState} from "react";
import MiddlePromotion from "./MainPageComponent/MiddlePromotion";
import Slider from "./SliderComponent/Slider";
import ProductPromotionTab from "./ProductComponent/ProductPromotionTab"
import CategoryPromotion from "./MainPageComponent/CategoryPromotion";
import { getAuth, onAuthStateChanged } from "firebase/auth";



function MainContainer() {
  const [userName, setUserName] = useState();
  //test
  //check login
  const auth = getAuth();// ?
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid)
      setUserName(uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  
  return (
    <div className="main-container">
      {/* banner Swiper react */}
      <div>
        currently user here: {userName}
      </div>
      <Slider/>
      <MiddlePromotion/>
      <ProductPromotionTab/>
      <CategoryPromotion/>
    </div>
  );
}
export default MainContainer;
