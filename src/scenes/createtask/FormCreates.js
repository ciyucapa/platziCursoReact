import PropTypes from 'prop-types';

import InputField from '../../components/commons/input';
import Button from '../../components/commons/button';
import {BoxInput, Container } from '../../components/styleComponents';
import SearchTask from '../../components/searchTask';
import ShowList from '../listTask';

const FormCreates = (props) => (
    <Container>
        <h1>AGREGAR TAREAS</h1>
        <BoxInput>
            <InputField 
                type="text" 
                placeholder="Añade tarea...." 
                value={props.task} 
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
    task: PropTypes.string,
    newsListTask: PropTypes.string,
    changeTask: PropTypes.func,
    onClick: PropTypes.func,
};

FormCreates.defaultProps = {
    task: '',
    newsListTask: '',
    changeTask: () => {},
    onClick: () => {},
};

export default FormCreates;