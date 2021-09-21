import ListTask from './listTask';
import useFormCreatesListTask from '../../hook/useFormCreatesListTask';

const ShowList = () => {
    const {newsListTask, deleteListTask} = useFormCreatesListTask();
    return <ListTask newsListTask={newsListTask} deleteListTask={deleteListTask}/>
};

export default ShowList;