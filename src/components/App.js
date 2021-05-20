// No need to import "react" just for JSX in React 17+
//import "../styles/index.scss";
import Navbar from './Navbar/Navbar';
import './App.css'
import About from "./Pages/About";
import Home from "./Pages/Home";
import Clubs from "./Pages/Clubs";
import Contact from "./Pages/Contact";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <main>
        <section>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/clubs">
                <Clubs />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
          
        </section>
      </main>
    </Router>
  );
};

export default App;
