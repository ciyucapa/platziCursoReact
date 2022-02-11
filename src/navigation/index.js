import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import CreateTask from '../scenes/createtask';
import ListTaskContainer from '../scenes/listTask';
import Header from "../components/Header.js";
import {ContextProvider} from '../context/Context'

const Navigation = () => (
    <ContextProvider>
        <Router>
            <Header/>
            <Switch>
                <Route path="/" component={ListTaskContainer} exact />
                <Route path="/create" component={CreateTask} />
                <Route path="/edit:id" component={CreateTask} />
            </Switch>
        </Router>
    </ContextProvider>
);

export default Navigation;