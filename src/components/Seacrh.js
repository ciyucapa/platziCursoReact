import PropTypes from 'prop-types';

import InputField from '../components/commons/input';

const Search = (props) => {
    return (
      <>
        <InputField placeholder="Buscador..." type="text" /* value={props.search} onChange={props.changeSearch}*//>
      </>
    );
  };
  
Search.propTypes = {
  search: PropTypes.string,
  changeSearch: PropTypes.func,
};

Search.defaultProps = {
  search: '',
  changeSearch: () => {},
};

export default Search;