import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/writings">writings</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/Projects">
            <Users />
          </Route>
          
          <Route path="/writings">
            <Writings/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Homepage</h2>;
}
function Writings() {
  return <h2>Hello</h2>;
}

function About() {
  return <h2>Aboutus</h2>;
}

function Users() {
  return <h2>Users</h2>;
}