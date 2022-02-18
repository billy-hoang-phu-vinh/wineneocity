import "./css/App.css";
import "./Components/HeaderContainer"
import HeaderContainer from "./Components/HeaderContainer";
import MainContainer from "./Components/MainContainer";
import FooterContainer from "./Components/FooterContainer"
function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <MainContainer/>
      <FooterContainer/>
    </div>
  );
}

export default App;
