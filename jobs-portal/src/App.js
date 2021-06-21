import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Jobs } from "./pages/Jobs";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/jobs" component={Jobs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
