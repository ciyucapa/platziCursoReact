import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Welcome from '../scenes/welcome';
import CreateTask from '../scenes/createtask';
import ShowList from '../scenes/listTask';

const Navigation = () => (
    <Router>
        <Switch>
            <Route path="/create" >
                <CreateTask/>
            </Route>
            <Route path="/show" >
                <ShowList/>
            </Route>
            <Route path="/" >
                <Welcome/>
            </Route>
        </Switch>
    </Router>
);

export default Navigation;