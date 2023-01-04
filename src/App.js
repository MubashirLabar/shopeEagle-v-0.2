import {BrowserRouter, Route} from "react-router-dom";

// css
import "./css/App.scss"

// screen && components
import Home from "./screen/Home";
import HomeSell from "./screen/HomeSell"
import PrivacyPolicy from "./screen/PrivacyPolicy"
import TermsConditions from "./screen/TermsConditions"

function App() {
  return (
    <div className="App rel"> 
      <BrowserRouter >
        <Route exact path="/" component={Home} />
        <Route exact path="/sell" component={HomeSell} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/terms-conditions" component={TermsConditions} />
      </BrowserRouter>
    </div>
  ); 
}

export default App;
