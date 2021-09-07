import PropTypes from 'prop-types';

import InputField from '../../components/commons/input';
import Button from '../../components/commons/button';
import {BoxInput, BoxButton } from '../../components/styleComponents';

const FormCreates = (props) => (
    <div>
        <h1>AGREGAR TAREAS</h1>
        <BoxInput>
            <InputField 
                type="text" 
                placeholder="Añade tarea...." 
                value={props.task} 
                onChange={props.changeTask} 
            />
        </BoxInput>
        <BoxButton>
            <Button 
                text="Agregar Tarea" 
                onClick={props.onClick}
                disabled={!props.isDisabled}
            />
        </BoxButton>
        <div>
        <h1>Lista de tareas por hacer</h1>
        {
            props.newsListTask.map((task) => (
                <div key={task.name} >
                    <div>{task.name}</div>
                </div>
            ))
        }
    </div>
    </div>
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