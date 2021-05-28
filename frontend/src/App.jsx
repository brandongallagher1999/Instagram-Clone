import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import 'bulma/css/bulma.css';
import Navbar from "./components/Navbar";
import SignIn from "./components/LoginPage";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path ="/" component={Navbar}/>
          <Route path="/login/" component={SignIn}/>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;