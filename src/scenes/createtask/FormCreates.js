import PropTypes from 'prop-types';
import {CreateContainer} from '../../components/styleComponents';

const FormCreates = (props) => (
    <CreateContainer>
        <h2>{props.task.id ? 'Edit Task' : 'Create Task'}</h2>
        <form onSubmit={props.handleSubmit}>
            <input
                name="title"
                type="text" 
                onChange={props.changeTask}
                value={props.task.title}
                placeholder="Create task...." 
            />
            <div>
                <textarea 
                    name="description"
                    rows="2"
                    placeholder="Describe the description"
                    onChange={props.changeTask}
                    value={props.task.description}
                >
                </textarea>
            </div>
                <button>{props.task.id ? 'Edit' : 'Create'}</button>
        </form>
    </CreateContainer>
);

FormCreates.propTypes = {
    valueTask: PropTypes.string,
    newsListTask: PropTypes.array,
    changeTask: PropTypes.func,
    onClick: PropTypes.func,
};

FormCreates.defaultProps = {
    valueTask: '',
    newsListTask: [],
    changeTask: () => {},
    onClick: () => {},
};

export default FormCreates;