import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const ListTask = (props) => (
    <div>
        {props.task.map((task) => (
            <div style={{padding: 10, backgroundColor: "red", display: "flex", marginBottom: "20px", flexDirection: "row", color: "white", justifyContent: "space-between"}} key={task.id}>
                <div>
                    <h3>{task.id}</h3>
                    <h3>{task.title}</h3>
                    <div>{task.description}</div>
                </div>
                <div>
                    <Link to={`/edit${task.id}`} ><button>Editar</button></Link>
                    <button onClick={props.deleteTask2(task.id)}>Borrar</button>
                </div>
                
            </div>
        ) )
        }
    </div>
);

ListTask.propTypes = {
    task: PropTypes.array,
    deleteTask2: PropTypes.func,
};

ListTask.defaultProps = {
    task:[],
    deleteTask2: () => {}
};

export default ListTask;