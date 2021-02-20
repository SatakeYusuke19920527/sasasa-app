import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentA = () => {
  const [count, setCount] = useState(0);
  const [data,setData] = useState([])

  useEffect(() => {
    console.log('useEffect が呼び出されました。');
  
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => {
        console.log(res, 'res check')
setData(res.data)
      })
  }, []);

  console.log(data)
  
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

