import {useState} from 'react';
import useFormCreatesListTask from './useFormCreatesListTask';

const useSearch = () => {
    const {newsListTask} = useFormCreatesListTask();
    const [search, setSearch] = useState('')

    const changeSearch = (event) => {
        setSearch(event.target.value)
    };

    return {
        newsListTask,
        search,
        changeSearch,
    };
};

export default useSearch;