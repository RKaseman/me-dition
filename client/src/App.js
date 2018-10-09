
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainModule from "./components/MainModule";

const App = () => (

    <Router>
        <MainModule />
        {/* <Switch> */}
            {/* <Route exact path="/" component={Books} /> */}
            {/* <Route exact path="/books" component={Books} /> */}
            {/* <Route exact path="/books/:id" component={Detail} /> */}
            {/* <Route component={NoMatch} /> */}
        {/* </Switch> */}

    </Router>

);

export default App;

