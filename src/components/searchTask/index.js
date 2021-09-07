import Search from './Seacrh';
import useSearch from '../../hook/useSearch';

const SearchTask = () => {
    const hook = useSearch();
    return <Search {...hook} />
};

export default SearchTask;