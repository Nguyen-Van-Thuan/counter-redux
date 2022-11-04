import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment_1 } from '../actions/counterAction';

const Counter1 = () => {
  const data = useSelector((state) => state)
  console.log(data, "counter_1");
  const dispatch = useDispatch()
  return (
    <>
      <button onClick={() => dispatch(increment_1())} >+</button>
      <h3>{data.count_1}</h3>
      <button onClick={() => dispatch(increment_1())} > -</button>
    </>
  )
}

export default Counter1