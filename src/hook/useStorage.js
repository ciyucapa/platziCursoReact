import {useState} from 'react';

const useStorage = () => {
    const [state, setState] = useState({
        hydrate: false,
        storageValue: defaultValue,
    });
    const {hydrate, storageValue} = state

    const getStorageValue = () => {
        let value = defaultValue
    };

    const updateStorageValue = () => {

    };

    return {

    };
};

export default useStorage;