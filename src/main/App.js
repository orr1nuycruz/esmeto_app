import "../App.css";
import Header from "./nav/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/about" Component={About} />
            <Route exact path="/contact" Component={Contact} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
