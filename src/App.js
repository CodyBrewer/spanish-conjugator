import Header from "./components/Layout/Header";
import Container from "./components/Verb/index";
import Navigation from "./components/Navigation/Navigation";
import DefaultLanding from "./DefaultLanding";
import SignUp from "./components/Navigation/SignUp";
import Graph from "./components/Graph/Graph";
import { ProtectedRoute } from "./components/auth/protectedRoute";
import PageNotFound from "./DefaultLanding/PageNotFound";
const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <div className="app-wrapper">
        <Switch>
          <Route exact path="/" component={DefaultLanding} />
          <ProtectedRoute exact path="/learn" component={Container} />
          <Route exact path="/progress" component={Graph} />
          <Route path="/*" component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
