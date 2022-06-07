import React, { useState } from "react";

function SignIn() {
  const [signinForm, setToggleState] = useState(1);
  //onclick -> save tab positon
  const signinTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="signin-container width-100 justify-center d-flex">
      <div className="signin-bar-navigation width-100 justify-center">
        <div className="container mx-auto d-flex justify-center" id="signin_tab">
          <div className="d-flex justify-center flex-col width-2-3 ">
            <div className="logo padding-8px width-100 d-flex justify-center">
              <a className="inline-block" href="http://">
                <img
                  className="width-150-px"
                  src={require("../../img/logo.png")}
                  alt="logo"
                />
              </a>
            </div>
            <div className="search-bar item-center flex-col width-100 d-flex justify-center">
              <div className="switch_tab">
                <div className="d-flex flex-row">
                  <div className="width-100 light-height-1 mx-top-4px">
                    <div className="d-flex height-100">
                      <div className="width-100">
                        <div className="tab d-flex flex-row justify-between">
                          <button
                            className={
                              signinForm === 1 ? "tabs active-tabs" : "tabs"
                            }
                            onClick={() => signinTab(1)}
                          >
                            LOGIN
                          </button>
                          <div className="split_bar"></div>
                          <button
                            className={
                              signinForm === 2 ? "tabs active-tabs" : "tabs"
                            }
                            onClick={() => signinTab(2)}
                          >
                            SIGN UP
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tabcontent width-100"
                style={signinForm === 1 ? { display: "flex" } : {}}
              >
                <form className="signin_form_frame flex width-2-3  text-16">
                  <div className="input_wrap">
                    <p>EMAIL:</p>
                    <input className="input_field" type="text" />
                  </div>
                  <div className="input_wrap">
                    <p>PASSWORD:</p>
                    <input className="input_field" type="password" />
                  </div>
                  <div className="input_wrap padding-bottom-24px width-1-3">
                    <p>
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>{" "}
                      Remember me{" "}
                    </p>
                  </div>
                  <div className="input_wrap mt-8px">
                    <input className="btn_submit" type="submit" value="LOGIN" />
                  </div>
                  <div className="input_wrap mt-8px">
                    <input
                      className="btn_submit_fb btn_submit"
                      type="submit"
                      value="LOGIN WITH FACEBOOK"
                    />
                  </div>
                  <div className="horizontalLine"></div>
                  <div className="reset_password width-100 text-center">
                    <a href="http://google.com">Reset your password</a>{" "}
                  </div>
                </form>
              </div>

              <div
                className="tabcontent width-100"
                style={signinForm === 2 ? { display: "flex" } : {}}
              >
                <form className="signin_form_frame flex width-2-3">
                  <div className="input_wrap">
                    <p>Email Address* :</p>
                    <input className="form_email input_field" type="text" placeholder="Please enter your email address"/>
                  </div>
                  <div className="input_wrap">
                    <p>Password* :</p>
                    <input className="form_password input_field" type="password" placeholder="Please enter your password"/>
                  </div>
                  <div className="input_wrap">
                    <p>Confirm Password* :</p>
                    <input className="form_cf_password input_field" type="password" placeholder="Please confirm your password" />
                  </div>
                  <div className="input_wrap padding-bottom-24px width-1-3">
                    <p>
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>{" "}
                      Send me news about exclusive deals, benefits and other promotions{" "}
                    </p>
                  </div>
                  <div className="input_wrap mt-8px">
                    <input className="btn_submit" id="btn_signup" type="submit" value="SIGNUP" />
                  </div>
                  
                  <div className="horizontalLine"></div>
                  
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
