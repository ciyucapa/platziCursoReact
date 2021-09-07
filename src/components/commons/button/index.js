import PropTypes from 'prop-types';
import {ButtonStyle} from '../../styleComponents';

const Button = (props) => (
    <ButtonStyle 
        onClick={props.onClick} 
        disabled={props.disabled} 
    >
        {props.text}
    </ButtonStyle>
);

Button.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    text: '',
    disabled: false,
    onClick: () => {},
};

export default Button;