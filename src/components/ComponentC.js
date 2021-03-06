import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
import reducer from '../Reducer/index'

const initialCount = {
  count: 0
};

const ComponentC = () => {
  const [ state, dispatch ] = useReducer(reducer, initialCount);

  const increment = () => {
    console.log('increment');
    dispatch({
      type: 'INCREMENT'
    });
  };

   const decrement = () => {
    console.log('decrement');
    dispatch({
      type: 'DECREMENT'
    });
   };
  
  
   const nacrement = () => {
    console.log('nacrement');
    dispatch({
      type: 'NACREMENT'
    });
  };

  return (
    <div>
      <div>ComponentC</div>
      <Link to="/">ComponentAへ移動</Link>
      <Link to="/componentb" >ComponentBへ移動</Link>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={nacrement}>り</button>
      <h1>{state.count}</h1>
    </div>
  );
};

export default ComponentC;