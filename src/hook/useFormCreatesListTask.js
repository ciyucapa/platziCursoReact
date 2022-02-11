import {useState, useContext, useEffect} from 'react';
//import useLocalStorage from './useStorage';
import {Context} from '../context/Context';
import {useHistory, useParams} from 'react-router-dom'

const useFormCreatesListTask = () => {
    //const [valueTask, setValueStask] = useLocalStorage('text', '')
    const history = useHistory();
    const params = useParams();
    const {addTask, deleteTask, tasks, updateTask} = useContext(Context);
    const [task, setTask] = useState({
        id: '',
        title: '',
        description: ''
    })

    useEffect(() => {
        const tareaencontrada = tasks.find(index => index.id === params.id);
        if(tareaencontrada){
            setTask(tareaencontrada)
        }
    }, [params, tasks]);
    
    const changeTask = (e) => {
        setTask({...task, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if(task.id) {
            console.log(updateTask(task))
            updateTask(task)
        } else {
            addTask(task);
        }
        history.push('/')
    };

    const deleteTasks = (id) => {
        deleteTask(id);
    };

    const isDisabled = () => {
        return task
    };

    return {
        deleteTasks,
        task,
        isDisabled,
        changeTask,
        handleSubmit
    };
};

export default useFormCreatesListTask;