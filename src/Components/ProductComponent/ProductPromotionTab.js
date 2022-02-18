import React, { useState } from "react";
import ProductList from "./ProductList";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Product from "./Product";
import { Scrollbar } from "swiper";

function ProductPromotionTab() {
  const [toggleState, setToggleState] = useState(1);
  //onclick -> save tab positon
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container mx-auto bg-silk">
      <div className="d-flex justify-between position-relative">
        <div className="d-flex flex-col item-center width-100 ">
          <div className=" border-top-bottom-1px width-100 d-flex ">
            <div className="width-30 light-height-1 mx-top-4px">
              <div className="d-flex height-100">
                <div className="category-hoverable ">
                  <span className="padding-8px">
                    <i class="fa fa-th-large"></i>
                  </span>
                  <span className="padding-8px">Sweet Valentine</span>
                </div>
              </div>
            </div>
            <div className="width-50 light-height-1 mx-top-4px">
              <div className="d-flex height-100">
                <div className="width-100">
                  <div className="tab">
                    <button
                      className={
                        toggleState === 1 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(1)}
                    >
                      GIFT SET
                    </button>
                    <button
                      className={
                        toggleState === 2 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(2)}
                    >
                      Under 50$
                    </button>
                    <button
                      className={
                        toggleState === 3 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(3)}
                    >
                      Under 100$
                    </button>
                    <button
                      className={
                        toggleState === 4 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(4)}
                    >
                      Under 200$
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-between position-relative">
        <div className="d-flex flex-col item-center width-100 ">
          <div className=" border-top-bottom-1px width-100 d-flex ">
            <div className="width-100 light-height-1 mx-top-4px">
              <div className="d-flex height-100">
                <div className="width-100">
                  <div
                    className="tabcontent"
                    style={toggleState === 1 ? { display: "flex" } : {}}
                  >
                    {/* <ProductList /> */}
                  </div>
                  <div
                    className="tabcontent"
                    style={toggleState === 2 ? { display: "flex" } : {}}
                  >
                    {/* tab2 here */}
                    <React.Fragment>
                      <div className="swiperContainer" id="swiperContainer">
                        <Swiper
                          spaceBetween={16}
                          slidesPerView={4}
                          onSlideChange={() => console.log("slide change")}
                          onSwiper={(swiper) => console.log(swiper)}
                          scrollbar={{
                            hide: true,
                          }}
                          modules={[Scrollbar]}

                        >
                          <SwiperSlide><Product/></SwiperSlide>
                          <SwiperSlide><Product/></SwiperSlide>
                          <SwiperSlide><Product/></SwiperSlide>
                          <SwiperSlide><Product/></SwiperSlide>
                          <SwiperSlide><Product/></SwiperSlide>
                          <SwiperSlide><Product/></SwiperSlide>

                        </Swiper>
                      </div>
                    </React.Fragment>
                  </div>
                  <div
                    className="tabcontent"
                    style={toggleState === 3 ? { display: "flex" } : {}}
                  >
                    tab3 here
                  </div>
                  <div
                    className="tabcontent"
                    style={toggleState === 4 ? { display: "flex" } : {}}
                  >
                    tab4 here
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductPromotionTab;
