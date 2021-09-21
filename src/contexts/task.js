import {createContext, useEffect} from 'react';
import PropTypes from 'prop-types';

import useStorage from '../hook/useStorage';
import {TASK_KEY, TASK_DEFAULT_VALUE} from './state';
import { useContext } from 'react/cjs/react.development';

const task = () => {
    const tasksContext = createContext();
    const {Provider} = tasksContext;

    const taskProvider = (props) => {
        const [task, updateTask, hydrated] = useStorage(
            TASK_KEY,
            TASK_DEFAULT_VALUE,
        );

        const value = useMemo(
            () => ({
                task,  
                updateTask,
                taskIsReady: hydrated,
        }), [task, updateTask, hydrated]);

        return <Provider value={value} {...props}/>;
    };

    taskProvider.propTypes = {
        children: PropTypes.shape({}).isRequired,
    };

    const useTask = () => {
        const context = useContext(tasksContext);

        if(!context) {
            throw new Error('useSettings must be used within a SettingsProvider');
        }

        const {task, updateTask: update, taskIsReady, ...rest} = context;

        useEffect(() => {

        }, [])
        
        return {

        }
    };


    return {
        taskProvider,
    };
};

export default task;