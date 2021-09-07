import {useCallback, useMemo, useState} from 'react';

const useFormCreatesListTask = () => {
    const [task, setTask] = useState('');
    const [newsListTask, setNewsListTask] = useState([
        {name: '', done: false}
    ]);

    const changeTask = (event) => {
        setTask(event.target.value);
    };

    const onClick = () => {
        updateListTask(task)
        setTask('');
    };

    const updateListTask = useCallback((task) => {
        if(!newsListTask.find( t => t.name === task)) {
            setNewsListTask([...newsListTask, {name:task, done:false}])
        };
    }, [task])

    const isDisabled = useMemo(() => {
        return task
    }, [task]);

    return {
        task,
        newsListTask,
        changeTask,
        onClick,
        isDisabled,
    };
};

export default useFormCreatesListTask;