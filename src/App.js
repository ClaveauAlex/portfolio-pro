import "./App.scss";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Home from "./pages";
// import SigninPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/signin" component={SigninPage} exact />
        <Route path="*" component={Error404} exact /> */}
      </Switch>
    </Router>
  );
}

export default App;
