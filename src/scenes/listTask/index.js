import ListTask from './listTask';
import {Context} from '../../context/Context';
import {useContext} from 'react';
import useFormCreatesListTask from '../../hook/useFormCreatesListTask';

const ListTaskContainer = () => {
    const {tasks} = useContext(Context);
    const {deleteTasks} = useFormCreatesListTask();
    return <ListTask tasks={tasks} deleteTask={deleteTasks} />
};

export default ListTaskContainer;