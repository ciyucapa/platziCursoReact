import PropTypes from 'prop-types';
import {Container } from '../../components/styleComponents';

const FormCreates = (props) => (
    <Container>
        <h2>AGREGAR TAREAS</h2>
        <form onSubmit={props.handleSubmit}>
            <input
                name="title"
                type="text" 
                placeholder="Añade tarea...." 
                onChange={props.changeTask} 
            />
            <div>
                <textarea 
                    name="description"
                    rows="2"
                    placeholder="Escribe la descripcion"
                    onChange={props.changeTask}
                >
                </textarea>
            </div>
            <div>
                <button disabled={!props.isDisabled}>AGREGAR TAREA</button>
            </div>
        </form>
    </Container>
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