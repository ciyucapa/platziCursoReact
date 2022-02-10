import PropTypes from "prop-types";

const InputField = (props) => (
    <input 
        placeholder={props.placeholder} 
        type={props.type} 
        value={props.value} 
        onChange={props.onChange} 
        name={props.title}
    />
);

InputField.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    title: PropTypes.string,
    onChange: PropTypes.func,
};

InputField.defaultProps = {
    placeholder: '',
    title: '',
    type: '',
    value: '',
    onChange: () => {},
};

export default InputField;