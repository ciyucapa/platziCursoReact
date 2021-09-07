import {useState} from 'react';

const useSearch = () => {
    const [search, setSearch] = useState('')

    const changeSearch = (event) => {
        setSearch(event.target.value)
    };

    return {
        search,
        changeSearch,
    };
};

export default useSearch;