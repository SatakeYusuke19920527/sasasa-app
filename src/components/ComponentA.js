import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import { Store } from '../store/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SA } from '../actions/index';

const ComponentA = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const [count, setCount] = useState(0);
  const [data,setData] = useState([])

  useEffect(() => {
    console.log('useEffect が呼び出されました。');
    getData();
  },[])

  const getData = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
      console.log(res.data)
      setGlobalState({
        type: SA,
        data: res.data
      });
    })
  }
  
  console.log(globalState)
  
  return (
    <div>
      <div>ComponentA</div>
      <Link to="/componentb" >ComponentBへ移動</Link>
      <Link to="/componentc" >ComponentCへ移動</Link>
      <div>count : {count}</div>
      <button onClick={() => setCount(count + 1)}>
        ！ボタンあがる！
    </button>
      <button onClick={() => setCount(count - 1)}>
        ！ボタンさがる！
    </button>
    
      <button onClick={() => setCount(count - count)}>
        ！ボタンりせっと！
    </button>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>userID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(d => {
              return (
                <tr>
                  <td>{d.userId}</td>
                  <td>{d.id}</td>
                  <td>{d.title}</td>
                <td>{d.body}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>

    </div>
  );
};

export default ComponentA;

