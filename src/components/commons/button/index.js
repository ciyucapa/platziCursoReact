import PropTypes from "prop-types";

const Button = (props) => (
    <button 
        onClick={props.onClick} 
        disabled={props.disabled} 
    >
        {props.text}
    </button>
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