import PropTypes from 'prop-types';

import InputField from '../commons/input';
import {SearchContainer} from '../styleComponents'

const Search = (props) => {
    return (
      <SearchContainer>
        <h1>Buscador de Tareas</h1>
        <div>
          <InputField 
            placeholder="Buscador..." 
            type="text" 
            value={props.search} 
            onChange={props.changeSearch}
          />
        </div>
        {props.search && props.newsListTask.filter(name => name.text.includes(props.search)).map(filteredName => (
                <li key={filteredName.text}>
                  {filteredName.text}
                </li>
        ))}
      </SearchContainer>
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