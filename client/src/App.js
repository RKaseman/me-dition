
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import MainModule from "./components/MainModule";

const App = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={MainModule} />
                <Route exact path="/books" component={MainModule} />
                <Route exact path="/books/:id" component={Detail} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
);

export default App;

