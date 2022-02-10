import ListTask from './listTask';
import {Context} from '../../context/Context';
import { useContext } from 'react';

const ListTaskContainer = () => {
    const {tasks} = useContext(Context);
    const contexto = useContext(Context);
    console.log("contexto", contexto)
    return <ListTask task={tasks} />
};

export default ListTaskContainer;