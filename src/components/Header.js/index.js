import { Link } from 'react-router-dom';

import Button from '../commons/button';

const Header = () => {
    return (
        <div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <Link to="/"><h2 style={{color: "gray"}}>Task App</h2></Link>
                <Link to="/create"><div><Button text='Agregar tarea'/></div></Link>
            </div>
        </div>
    )
};

export default Header