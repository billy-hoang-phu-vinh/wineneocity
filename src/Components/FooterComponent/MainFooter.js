import React, { useState } from "react";

function MainFooter() {
  return (
    <div className="footer-bar-navigation">
      <div className="container mx-auto d-flex width-100 text-12">
        <div className="d-flex justify-between width-100">
          <div className="width-2-3 flex-row d-flex border-right-width">
            <div className="width-25 mtb-24px">
              <div className="mt-8px mb-16px text-font-bold">Need Help? </div>
              <div className="mb-4px">
                <a href="http://">How to shop</a>{" "}
              </div>
              <div className="mb-4px">
                <a href="http://">Help center</a>{" "}
              </div>
              <div className="mb-4px">
                <a href="http://">Home Delivery</a>{" "}
              </div>
              <div className="mb-4px">
                <a href="http://">How to return</a>{" "}
              </div>
              <div className="mb-4px">
                <a href="http://">Contact Us</a>
              </div>
            </div>

            <div className="width-25 mtb-24px">
              <div className="mt-8px mb-16px text-font-bold">
                Let's Connect{" "}
              </div>
              <div className="mb-4px">
                <a href="http://">How to shop</a>{" "}
              </div>
              <div className="mb-4px">
                <a href="http://">Help center</a>{" "}
              </div>
              <div className="mb-4px">
                <a href="http://">Home Delivery</a>{" "}
              </div>
              <div className="mb-4px">
                <a href="http://">How to return</a>{" "}
              </div>
              <div className="mb-4px">
                <a href="http://">Contact Us</a>
              </div>
            </div>
            <div className="width-25 mtb-24px">
              <div className="mt-8px mb-16px text-font-bold">
                About Wineneocity{" "}
              </div>
              <div className="mb-4px">
                <a href="http://">How to shop</a>{" "}
              </div>
              <div className="mb-4px">
                <a href="http://">Help center</a>{" "}
              </div>
              <div className="mb-4px">
                <a href="http://">Home Delivery</a>{" "}
              </div>
              <div className="mb-4px">
                <a href="http://">How to return</a>{" "}
              </div>
              <div className="mb-4px">
                <a href="http://">Contact Us</a>
              </div>
            </div>
            <div className="width-25 mtb-24px">
              <div className="mt-8px mb-16px text-font-bold">
                Payment Option{" "}
              </div>
              <img
                id="paymentoption"
                src={require("../../img/icons/accept-visa-mc-amex-interact-cash.png")}
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="width-1-3 d-flex flex-col mx-2rem">
            <div className="width-100 mtb-24px">
              <div className="mt-8px mb-16px text-font-bold">
                Be first to know{" "}
              </div>
              <div className="mt-8px mb-16px ">
                Subscribe and get access to the latest news, deals and
                promotions from Wineneocity and our business partners.
              </div>
              <div className="mt-8px mb-16px text-font-bold">
                <div className="search-form width-100 d-flex">
                  <div className="position-relative width-70 padding-top-left-5px d-flex flex-row">
                    <button className="search-submit" type="submit">
                      <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                    </button>
                    {/* <img className="width-7-px" src={require('../img/logo.png')} alt="" srcset="" /> */}
                    <div className="flex-basis-80">
                      <input
                        placeholder="Enter Your Email Address"
                        className="search-input width-100"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainFooter;
