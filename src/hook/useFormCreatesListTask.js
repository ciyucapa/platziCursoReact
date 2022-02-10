import {useState, useContext} from 'react';
//import useLocalStorage from './useStorage';
import {Context} from '../context/Context'

const useFormCreatesListTask = () => {
    //const [valueTask, setValueStask] = useLocalStorage('text', '')
    const {addTask, deleteTask} = useContext(Context);
    const [task, setTask] = useState({
        title: '',
        description: ''
    })
   /* const [newsListTask, setNewsListTask] = useState([
        {text: 'beber agua'},
        {text: 'tomar cafe'}
    ]); */
    
    const changeTask = (e) => {
        setTask({...task, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(task)
        addTask(task);
    };

  /*  const onClick = () => {
        updateListTask(valueTask)
        setValueStask('');
    };

    const updateListTask = (valueTask) => {
        if(!newsListTask.find( t => t.text === valueTask)) {
            setNewsListTask([...newsListTask, {text:valueTask}]);
        };
    }
    
     const deleteListTask = (text) => {
        if(newsListTask.findIndex(t => t.text === text)) {
            const newList = [...newsListTask];
            newsListTask.splice(newsListTask, 1);
            setNewsListTask(newList);
        }
    }*/

   /* const totalTask = () => {
        const value = newsListTask.length
        return value;
    }
*/
    const isDisabled = () => {
        return task
    }

    const deleteTask2 = (id) => {
        deleteTask(id)
    }


    return {
        task,
        deleteTask2,
        isDisabled,
        changeTask,
        handleSubmit
    };
};

export default useFormCreatesListTask;