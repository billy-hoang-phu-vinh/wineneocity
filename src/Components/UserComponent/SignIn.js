import React, { useEffect, useState } from "react";
import { signup } from "../firebase";
import { login } from "../firebase";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { async } from "@firebase/util";
import { useHistory } from "react-router-dom";
// ??import useStateValue 


function SignIn() {
  //auth state changed
  // test
  const [currentUser, setcurrentUser] = useState();
  //dispatch
 // const [{},dispatch] = useStateValue();
  useEffect(()=>{
    const unsubcribe = auth.onAuthStateChanged((user => {
      if(user){
        setcurrentUser(user);//test
//        dispatch

      }

    }));
    return unsubcribe;
  },[])

const history = useHistory(); //

  const [loginErr, setLoginErr] = useState(false);
  const [registerErr, setRegisterErr] = useState(false);


  const [signinForm, setToggleState] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [password, setPassword] = useState("");
  //onclick -> save tab positon
  const signinTab = (index) => {
    setToggleState(index);
  };


  const register = (e) => {
    e.preventDefault();
    console.log("register success");
    console.log(email);
    //firebase here
    //verify password

    //register
    createUserWithEmailAndPassword(auth, email,password).then((userCredential) => {
      // Signed in 
      console.log(userCredential.user)
      //register successfully
      if(userCredential){
        history.push('/');
      }
      
    })
    .catch((error) => {
      setRegisterErr(true);
      // ..
    });
  };
  //login
  const signin = (e) => {
    console.log(`currentUser`)
    console.log(currentUser)
    e.preventDefault();
    console.log(email);
    //firebase here
    //login
    signInWithEmailAndPassword(auth, email,password).then((userCredential) => {
      // Signed in 
      console.log(userCredential.user)
      if(userCredential){
        history.push('/');//back to the homepage
      }
      // ...
    })
    .catch((error) => {
      setLoginErr(true);
     
      // ..
    });
  };
  //test

  return (
    <div className="signin-container width-100 justify-center d-flex">
      <div className="signin-bar-navigation width-100 justify-center">
        <div
          className="container mx-auto d-flex justify-center"
          id="signin_tab"
        >
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
              {/* tab */}

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
                  <div className="input_wrap" style={{display: loginErr ? 'block' : 'none'}}>
                    <div class="alert alert-danger">
                      <p></p>
                      <ul class="errorlist nonfield">
                        <li>
                          You have entered an incorrect email or password.
                          Please note that both fields are case-sensitive.
                        </li>
                      </ul>

                      <p></p>
                    </div>
                  </div>
                  <div className="input_wrap">
                    <p>EMAIL:</p>
                    <input
                      className="input_field"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="text"
                    />
                  </div>
                  <div className="input_wrap">
                    <p>PASSWORD:</p>
                    <input
                      className="input_field"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type="password"
                    />
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
                    {/* <input className="btn_submit" id="btn_signup" type="submit" value="SIGNUP" /> */}
                    <button className="btn_submit" onClick={signin}>
                      LOGIN
                    </button>
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
                 
                <div className="input_wrap" style={{display: registerErr ? 'block' : 'none'}}>
                    <div class="alert alert-danger">
                      <p></p>
                      <ul class="errorlist nonfield">
                        <li>
                        There was an unexpected error with the login session
                        </li>
                      </ul>

                      <p></p>
                    </div>
                  </div>                  <div className="input_wrap">
                    <p>Email Address* :</p>
                    <input
                      className="form_email input_field"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="text"
                      placeholder="Please enter your email address"
                    />
                  </div>
                  <div className="input_wrap">
                    <p>Password* :</p>
                    <input
                      className="form_password input_field"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type="password"
                      placeholder="Please enter your password"
                    />
                  </div>
                  <div className="input_wrap">
                    <p>Confirm Password* :</p>
                    <input
                      className="form_cf_password input_field"
                      type="password"
                      placeholder="Please confirm your password"
                    />
                  </div>
                  <div className="input_wrap padding-bottom-24px width-1-3">
                    <p>
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>{" "}
                      Send me news about exclusive deals, benefits and other
                      promotions{" "}
                    </p>
                  </div>
                  <div className="input_wrap mt-8px">
                    {/* <input className="btn_submit" id="btn_signup" type="submit" value="SIGNUP" /> */}
                    <button
                      className="btn_submit_gr btn_submit"
                      onClick={register}
                    >
                      Register
                    </button>
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
