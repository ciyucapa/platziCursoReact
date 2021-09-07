import ListTask from './listTask';
import useFormCreatesListTask from '../../hook/useFormCreatesListTask';

const ShowList = () => {
    const {newsListTask} = useFormCreatesListTask();
    console.log(newsListTask)
    return <ListTask newsListTask={newsListTask} />
};

export default ShowList;