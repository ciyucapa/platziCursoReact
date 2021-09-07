import PropTypes from 'prop-types';

import InputField from '../commons/input';

const Search = (props) => {
    return (
      <>
        <h1>Buscador de Tareas</h1>
        <InputField 
          placeholder="Buscador..." 
          type="text" 
          value={props.search} 
          onChange={props.changeSearch}
        />
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