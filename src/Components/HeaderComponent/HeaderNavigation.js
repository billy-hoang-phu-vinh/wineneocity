import React, { useState} from "react";


function HeaderNavigation() {
  
  
  return (
    <div className="header-bar-navigation">
        <div className="container mx-auto">
          <div className="d-flex justify-between">
            <div className="logo padding-8px">
              <a className="inline-block" href="http://">
                <img
                  className="width-150-px"
                  src={require("../../img/logo.png")}
                  alt="logo"
                />
              </a>
            </div>
            <div className="search-bar item-center">
              <form className="flex width-100">
                <div className="search-form width-100 d-flex">
                  <div className="position-relative width-100 padding-top-left-5px d-flex flex-row">
                    <button className="search-submit" type="submit">
                      <i class="fa fa-search"></i>
                    </button>
                    {/* <img className="width-7-px" src={require('../img/logo.png')} alt="" srcset="" /> */}
                    <div className="flex-basis-80">
                      <input
                        placeholder="Search for products"
                        className="search-input width-100"
                      ></input>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="user-header-bar d-flex justify-end position-relative">
              <div className="width-35-px padding-top-bottom-dot5">
              <a href="/signin">
              <i class="fa fa-user-o scale-1-3" aria-hidden="true"></i>
              </a>
              </div>
              <div className="padding-top-bottom-dot5">
                <i
                  class="fa fa-shopping-basket scale-1-3"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default HeaderNavigation;