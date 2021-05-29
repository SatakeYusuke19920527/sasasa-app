import React, { useContext } from 'react'
import { Store } from '../store/index';
import { Table } from 'react-bootstrap'
import { INCREMENT, DECREMENT, RESET, THREE, SA } from '../actions/index';

const ComponentE = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const handleClick = () => {
    setGlobalState({
      type: INCREMENT
    });
  };
  const handleClick1 = () => {
    setGlobalState({
      type: DECREMENT
    });
  };
  const handleClick2 = () => {
    setGlobalState({
      type: RESET
    });
  };
  const handleClick3 = () => {
    setGlobalState({
      type: THREE
    });
  };
  
  //     const = () => {
  // setGlobalState({
  //   type: SA
  // });
  // };
  
  console.log(globalState.data, 'componentE');

  return (
    <div>
      <div>ComponentE</div>
      <h1>ComponentE.js</h1>
      <button onClick={handleClick}>+1</button>
      <button onClick={handleClick1}>-1</button>
      <button onClick={handleClick2}>0</button>
      <button onClick={handleClick3}>3</button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>userID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {
            globalState.data.map(d => {
              return (
                <tr>
                  <td>{d.userId}</td>
                  <td>{d.id}</td>
                  <td>{d.title}</td>
                  <td>{d.completed}</td>
                </tr>
              )
            }
            )   
          }
        </tbody>
      </Table>
    </div>
 );
};

export default ComponentE;