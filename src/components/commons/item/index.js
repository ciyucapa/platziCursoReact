import PropTypes from 'prop-types';

import  {Assets} from '../../../utils/assents';
import './item.css'

const Item = (props) => (
    <>
      <div className="container-item">
          <div className="container-text">
            <img src={Assets.image.checked} className="item-img" alt="aprobado" />
            <div className="item-text">{props.text}</div>
          </div>
          <img src={Assets.image.closet} className="item-img" alt="equis" />
      </div>
    </>
);

Item.propTypes ={
    text: PropTypes.string
};

Item.defaultProps ={
    text: ''
};
  
  export default Item;