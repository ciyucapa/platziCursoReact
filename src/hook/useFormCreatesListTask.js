import {useCallback, useMemo, useState} from 'react';
//import {useHistory} from 'react-router-dom';

const useFormCreatesListTask = () => {
   // let history = useHistory();
    const [task, setTask] = useState(''); 
    const [newsListTask, setNewsListTask] = useState([
        {name: 'Tomar Agua'},
        {name: 'Tomar Cafe'}
    ]); 

    const changeTask = (event) => {
        setTask(event.target.value);
    };

    const onClick = () => {
        updateListTask(task)
        setTask('');
        /*history.push('/show')*/
    };

    const updateListTask = useCallback((task) => {
        if(!newsListTask.find( t => t.name === task)) {
            setNewsListTask([...newsListTask, {name:task, done:false}])
        };
    }, [newsListTask])

    const totalTask = useMemo(() => {
        const value = newsListTask.length
        return value
    }, [newsListTask]);

    const isDisabled = useMemo(() => {
        return task
    }, [task]);

    return {
        task,
        newsListTask,
        isDisabled,
        changeTask,
        onClick,
        totalTask,
    };
};

export default useFormCreatesListTask;