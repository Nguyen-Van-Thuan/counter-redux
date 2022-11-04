import React from 'react'
import { connect } from 'react-redux';
import { decrement, increment } from '../actions/counterAction';

const Button = (props) => {

  return (
    <>
      <button onClick={props.increment}>+</button>
      <h3>{props.count}</h3>
      <button onClick={props.decrement}>-</button>
    </>
  );
};

const mapStateToProps = (state) => { //lay state ve tu store
  console.log(state.count, "state.count");
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch) => { //Thực thi các action thông qua props
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
