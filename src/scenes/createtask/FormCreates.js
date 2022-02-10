import PropTypes from 'prop-types';

import InputField from '../../components/commons/input';
import Button from '../../components/commons/button';
import {BoxInput, Container } from '../../components/styleComponents';

const FormCreates = (props) => (
    <Container>
        <h1>AGREGAR TAREAS</h1>
        <BoxInput>
            <InputField 
                type="text" 
                placeholder="Añade tarea...." 
                value={props.valueTask} 
                onChange={props.changeTask} 
            />
            <Button 
                text="Agregar Tarea" 
                onClick={props.onClick}
                disabled={!props.isDisabled}
            />
        </BoxInput>
        <div>
        <h1>Lista de tareas por hacer</h1>
        {
            props.newsListTask.map((task) => (
                <div key={task.text} >
                    <div>{task.text}</div>
                </div>
            ))
            }
        </div>
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