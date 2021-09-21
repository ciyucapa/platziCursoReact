import PropTypes from 'prop-types';

const Counter = (props) => (
  <h1>Tienes {props.totalTask} tareas por hacer </h1>
);

Counter.propTypes = {
  totalTask: PropTypes.number,
};

Counter.defaultProps = {
  totalTask: 0,
};
  
  export default Counter;