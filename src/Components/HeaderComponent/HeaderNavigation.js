import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStatevalue } from "../../StateProvider";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";

function HeaderNavigation() {
  const [{ cart }, dispatch] = useStatevalue();
  const auth = getAuth();
  const [userName, setUserName] = useState();
  const history = useHistory(); //

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUserName(user.email);
      console.log(`set user email: `, user);
      // ...
    } else {
      // User is signed out

    }
  });
  const signout = (e) => {
    // e.preventDefault();

    signOut(auth)
      .then(() => {
        // .

        setUserName("");
        history.push("/signout");
        console.log(`Sign-out successful`);
        // Clear cart
        dispatch({
          type: "DELETE_CART",
        });
        console.log(`cart is clear`);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const Signout = (
    <div className="width-35-px padding-top-bottom-dot5 signout_btn">
      <button className="signout_btn" onClick={signout}>
        <i class="fa fa-sign-out" aria-hidden="true"></i>
      </button>
    </div>
  );

  return (
    <div className="header-bar-navigation">
      <div className="container mx-auto">
        <div className="d-flex justify-between">
          <div className="logo padding-8px">
            <Link to="/">
              <img
                className="width-150-px"
                src={require("../../img/logo.png")}
                alt="logo"
              />
            </Link>
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
              <Link to="/signin">
                <i class="fa fa-user-o scale-1-3" aria-hidden="true"></i>
              </Link>
            </div>
            <Link to="/checkout">
              <div className="padding-top-bottom-dot5">
                <i
                  class="fa fa-shopping-basket scale-1-3"
                  aria-hidden="true"
                ></i>
                {/* in case there is any error with cart, it does not stop render*/}
                <span> {cart?.length}</span>
              </div>
            </Link>
            <div>
              <Link to="/">{userName ? Signout : ""}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeaderNavigation;
