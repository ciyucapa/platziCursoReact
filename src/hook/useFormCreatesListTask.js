import {useState} from 'react';
import useLocalStorage from './useStorage';

const useFormCreatesListTask = () => {
    const [valueTask, setValueStask] = useLocalStorage('text', '')
    const [newsListTask, setNewsListTask] = useState([
        {text: 'beber agua'},
        {text: 'tomar cafe'}
    ]); 
    
    const changeTask = (event) => {
        setValueStask(event.target.value);
    };

    const onClick = () => {
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
    }

    const totalTask = () => {
        const value = newsListTask.length
        return value;
    }

    const isDisabled = () => {
        return valueTask
    }


    return {
        valueTask,
        newsListTask,
        totalTask,
        isDisabled,
        changeTask,
        onClick,
        deleteListTask,
    };
};

export default useFormCreatesListTask;