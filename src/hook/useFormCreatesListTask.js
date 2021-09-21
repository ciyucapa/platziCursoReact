import {useCallback, useMemo, useState} from 'react';

const useFormCreatesListTask = () => {
    const [task, setTask] = useState(''); 
    const [newsListTask, setNewsListTask] = useState([
        {text: 'Tomar Agua', done: false},
        {text: 'Tomar Cafe', done: false}
    ]); 

    const changeTask = (event) => {
        setTask(event.target.value);
    };

    const onClick = () => {
        updateListTask(task)
        setTask('');
    };

    const updateListTask = useCallback((task) => {
        if(!newsListTask.find( t => t.text === task)) {
            setNewsListTask([...newsListTask, {text:task, done:false}]);
        };
    }, [newsListTask])
    
     const deleteListTask = useCallback((text) => {
        if(newsListTask.findIndex(t => t.text === text)) {
            const newList = [...newsListTask];
            newList.splice(newsListTask, 1);
            setNewsListTask(newList);
        }
    }, [newsListTask])

    const totalTask = useMemo(() => {
        const value = newsListTask.length
        return value;
    }, [newsListTask]);

    const isDisabled = useMemo(() => {
        return task
    }, [task]);

    return {
        task,
        newsListTask,
        totalTask,
        isDisabled,
        changeTask,
        onClick,
        deleteListTask,
    };
};

export default useFormCreatesListTask;