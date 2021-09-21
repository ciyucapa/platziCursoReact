import {useCallback, useState, useEffect} from 'react';

const useStorage = (key, defaultValue) => {
    const [state, setState] = useState({
        hydrated: false,
        storageValue: defaultValue,
    });
    const {hydrate, storageValue} = state

    const getStorageValue = useCallback(() => {
        let value = defaultValue;
        let fromStorage = null;
        try {
            fromStorage = localStorage.getItem(key);
        } catch (e) {} finally {
            if(fromStorage){
                value= JSON.parse(fromStorage)
            }
            setState({
                hydrated: true,
                storageValue: value,
            })
        }
    }, [key, defaultValue])

    const updateStorageValue = useCallback((newValue) => {
        try {
            if (newValue === null) {
                localStorage.removeItem(key);
                setState({
                    hydrated: true,
                    storageValue: defaultValue,
                })
            } else {
                const newFiedValue = JSON.stringify(newValue);
                localStorage.setItem(key, newFiedValue);
                getStorageValue();
            }
        } catch (e) {}
    }, [key, defaultValue, getStorageValue]);

    useEffect(() => {
        getStorageValue();
    }, [getStorageValue]);

    return [ 
        storageValue,
        updateStorageValue,
        hydrated,
    ];
};

export default useStorage;