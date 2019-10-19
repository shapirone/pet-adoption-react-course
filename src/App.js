import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams.jsx";
import Details from "./Details.jsx";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">
            <h1 id="something-important">Adopt Me!</h1>
          </Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
