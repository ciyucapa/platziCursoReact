import PropTypes from "prop-types";

import {Input} from '../../styleComponents';

const InputField = (props) => (
    <Input 
        placeholder={props.placeholder} 
        type={props.type} 
        value={props.value} 
        onChange={props.onChange} 
    />
);

InputField.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

InputField.defaultProps = {
    placeholder: '',
    type: '',
    value: '',
    onChange: () => {},
};

export default InputField;