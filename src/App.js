import "./css/App.css";
import "./Components/HeaderContainer"
import HeaderContainer from "./Components/HeaderContainer";
import MainContainer from "./Components/MainContainer";
import FooterContainer from "./Components/FooterContainer"
import SignIn from "./Components/UserComponent/SignIn";
function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <MainContainer/>
      <SignIn/>
      <FooterContainer/>
    </div>
  );
}

export default App;
