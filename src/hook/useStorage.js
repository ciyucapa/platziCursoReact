import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    const [valueStorage, setValueStorage] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    });

    const setLocalStorage = (value) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
            setValueStorage(value)
        } catch (error) {

        }
    }
    
    return [ 
        valueStorage,
        setLocalStorage
    ];
};

export default useLocalStorage;