import React, { useState} from "react";
// import { useEffect } from 'react';


function HeaderCategory() {
    const [subBrandVisible, setsubBrandVisible] = useState(false);
    function hideSubBrand() {
      // testing
  
      // useEffect(()=> {
      //   const timer = setTimeout(() => console.log("Hello, World!"), 3000);
      //   return () => clearTimeout(timer);
      // }, []);
      
      setsubBrandVisible(false)
    }
  
  return (
    <div className="header-category">
        <div className="container mx-auto">
          <div className="d-flex justify-between position-relative">
            <div className="d-flex flex-col item-center width-100 ">
              <div className=" border-top-bottom-1px width-100 d-flex ">
                <div className="width-25 light-height-1 mx-top-4px">
                  <div className="d-flex height-100">
                    <div className="category-hoverable ">
                      <span className="padding-8px">
                        <i class="fa fa-th-large"></i>
                      </span>
                      <span className="padding-8px">SHOP ALL CATEGORIES</span>

                      <div className="category-hoverable-content ">
                        <div className="sub-menu-cover">
                          <div className="sub-menu width-100">main</div>
                        </div>
                        <div className="sub-menu-cover">
                          <div className="sub-menu width-100">main</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-1 width-50">
                  <div className="item-center d-flex justify-between">
                    <div 
                    onMouseEnter={() => setsubBrandVisible(true)}
                    
                    className="brand testbuton1 d-flex item-center height-100 padding-8px">
                      BRANDS 
                    </div>
                    
                    <a
                      className=" hover-top-color padding-8px"
                      href="/page/promotions"
                    >
                      PROMOTIONS
                    </a>
                    <div className="hover-top-color text-purple padding-8px">
                      WINENEOCITY EXPIERENCE
                    </div>
                  </div>
                </div>
                <div className="width-25 light-height-1 mx-top-4px">
                  <div className="d-flex height-100">
                    <div className="category-hoverable-best-wine ">
                      <span className="padding-8px">
                        <i class="fa fa-gift"></i>
                      </span>
                      <span className="padding-8px item-center inline-block"><a href="./page/collections"> Best Wine Collection</a></span>

                      
                    </div>
                  </div>
                </div>
              </div>
              <div className=" width-100 d-flex ">
                <div className="width-25 light-height-1 mx-top-4px">
                  {/* OLD FRAME  <div className="d-flex height-100">
                    <div className="category-hoverable ">
                      <span className="padding-8px">
                        <i class="fa fa-th-large"></i>
                      </span>
                      <span className="padding-8px">SHOP ALL CATEGORIES</span>

                      <div className="category-hoverable-content ">
                        <div className="sub-menu-cover">
                          <div className="sub-menu width-100">main</div>
                        </div>
                        <div className="sub-menu-cover">
                          <div className="sub-menu width-100">main</div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                {subBrandVisible && (
                  <div className="d-flex flex-1 width-30 brand"
                  onMouseLeave={() => setsubBrandVisible(false)}
                  >
                  <div className="sub-brand brand-show width-70 ">
                  <div className="flex-col item-center d-flex justify-between">
                    <div className="width-100 d-flex item-center height-100 padding-8px">
                      <div className="width-100">
                        <div className="search-form width-100 d-flex">
                          <div className="position-relative width-70 padding-top-left-5px d-flex flex-row">
                            <button className="search-submit" type="submit">
                              <i class="fa fa-search"></i>
                            </button>
                            {/* <img className="width-7-px" src={require('../img/logo.png')} alt="" srcset="" /> */}
                            <div className="flex-basis-80">
                              <input
                                placeholder="Search for Brands"
                                className="search-input width-100"
                              ></input>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-col width-100  d-flex height-100 padding-8px">
                      <div className="width-30">FEATURE BRANDS </div>
                    </div>
                    <div className="width-100  d-flex item-center height-100 padding-8px">
                      <div className="width-100 d-flex flex-wrap">
                        
                      <div className="width-20 padding-8px">
                        <a href="./page/product/apple">
                          <img src={("https://pic.onlinewebfonts.com/svg/img_103664.png")} alt=""  />
                        </a>
                        </div>

                        <div className="width-20 padding-8px">
                        <a href="./page/product/apple">
                          <img src={("https://pic.onlinewebfonts.com/svg/img_103664.png")} alt=""  />
                        </a>
                        </div>

                        <div className="width-20 padding-8px">
                        <a href="./page/product/apple">
                          <img src={("https://pic.onlinewebfonts.com/svg/img_103664.png")} alt=""  />
                        </a>
                        </div>
                        <div className="width-20 padding-8px">
                        <a href="./page/product/apple">
                          <img src={("https://pic.onlinewebfonts.com/svg/img_103664.png")} alt=""  />
                        </a>
                        </div>
                        <div className="width-20 padding-8px">
                        <a href="./page/product/apple">
                          <img src={("https://pic.onlinewebfonts.com/svg/img_103664.png")} alt=""  />
                        </a>
                        </div>
                        
                        </div>
                    </div>
                  </div>
                  </div>
                  
                </div>
        )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default HeaderCategory;