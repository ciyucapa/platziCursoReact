import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {ListarContainer} from '../../components/styleComponents';

const ListTask = (props) => (
    <ListarContainer>
        {props.tasks.map((task) => (
            <section key={task.id}>
                <div>
                    <table>
                        <tr>
                            <td>Id</td>
                            <td>Title</td>
                            <td>Description</td>
                        </tr>
                        <tr>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                        </tr>
                    </table>
                </div>
                    <Link to={`/edit${task.id}`}><button>Edit</button></Link>
                    <button onClick={() => props.deleteTask(task.id)}>Delete</button>
            </section>
        ) )
        }
    </ListarContainer>
);

ListTask.propTypes = {
    tasks: PropTypes.array,
    deleteTask: PropTypes.func,
};

ListTask.defaultProps = {
    tasks:[],
    deleteTask: () => {}
};

export default ListTask;