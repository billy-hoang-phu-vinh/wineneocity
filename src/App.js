import "./css/App.css";
import "./Components/HeaderContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HeaderContainer from "./Components/HeaderContainer";
import MainContainer from "./Components/MainContainer";
import FooterContainer from "./Components/FooterContainer";
import SignIn from "./Components/UserComponent/SignIn";
import { useEffect } from "react";
import { auth } from "./Components/firebase";


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
        <Switch>

          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/">
            <HeaderContainer />
            <MainContainer />
            <FooterContainer />
          </Route>
          </Switch>
    
        </div>
    </Router>
  );
}

export default App;
