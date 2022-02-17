import "./css/App.css";
import "./Components/HeaderContainer"
import HeaderContainer from "./Components/HeaderContainer";
import MainContainer from "./Components/MainContainer";
function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <MainContainer/>
    </div>
  );
}

export default App;
