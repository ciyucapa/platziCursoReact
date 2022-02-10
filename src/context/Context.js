import { createContext, useReducer } from "react";
import { appReducer } from "./appReducer";
import {v4} from 'uuid'

const initialValue = {
    tasks: [
        {id: 1, title: "tarea 1", description: "description 1", done: false},
        {id: 2, title: "tarea 2", description: "description 2", done: false}
    ]
}

export const Context = createContext(initialValue);

export const ContextProvider = (props) => {
    const [state, dispatch] = useReducer(appReducer, initialValue);

    const addTask = (task) => {
        dispatch({type: 'ADD_TASK', payload:{...task, id: v4()} })
        
    };

    const deleteTask = (id) => {
        console.log(id)
        dispatch({type: 'DELETE_TASK', payload:id })
    };

    const editTask = () => {
        dispatch({type: 'EDIT_TASK'})
    }

    return (
        <Context.Provider value={{...state, addTask, deleteTask, editTask}}>
            {props.children}
        </Context.Provider>
    )
};
