import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Welcome from "../scenes/welcome";
import Counter from '../components/Counter';

const Navigation = () => (
    <Router>
        <Switch>
            <Route path="/counter" >
                <Counter/>
            </Route>
            <Route path="/" >
                <Welcome/>
            </Route>
        </Switch>
    </Router>
);

export default Navigation;