import "./css/App.css";
import "./Components/HeaderContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HeaderContainer from "./Components/HeaderContainer";
import MainContainer from "./Components/MainContainer";
import FooterContainer from "./Components/FooterContainer";
import SignIn from "./Components/UserComponent/SignIn";
import { useEffect } from "react";
import { auth } from "./Components/firebase";
import Checkout from "./Components/ProductComponent/Checkout";

function App() {
  useEffect(()=> {
  //run only when component loads
    auth.onAuthStateChanged(authUser => {
      console.log(`user >>: `,authUser) //debug
    });
  },[]);
  return (
    <Router>
      
        <div className="App">
        <HeaderContainer />

        <Switch>

          <Route path="/signin">
            <SignIn />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <MainContainer />
            <FooterContainer />
          </Route>
          </Switch>
    
        </div>
    </Router>
  );
}

export default App;
