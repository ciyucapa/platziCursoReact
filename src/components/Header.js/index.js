import { Link } from 'react-router-dom';
import {Navbar} from '../styleComponents'

const Header = () => (
    <Navbar>
        <Link to="/">
            <p>Task App</p>
        </Link>
        <Link to="/create">
            <div>Add Task</div>
        </Link>
    </Navbar>
);

export default Header