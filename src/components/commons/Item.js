import PropTypes from 'prop-types';

import  {closet, checked} from '../../utils/assents';

const Item = (props) => {
    return (
      <>
        <li>
            <img src={checked} />
            <p> {props.text} </p>
            <span>X</span>
        </li>
      </>
    );
};

Item.propTypes ={
    text: PropTypes.string
};

Item.defaultProps ={
    text: ''
};
  
  export {Item};