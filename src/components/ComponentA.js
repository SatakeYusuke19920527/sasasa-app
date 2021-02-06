import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ComponentA = () => {
  const [count, setCount] = useState(0);
  const [data,setData] = useState([])
  

  useEffect(() => {
    console.log('useEffect が呼び出されました。');
  
    axios.get('https://jsonplaceholder.typicode.com/todos')
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
    
          <button onClick={() => setCount(count-count)}>
        ！ボタンりせっと！
    </button>
      {
        data.map(d => {
          return (
            <div>
              <div>{d.id}</div>
              <div>{d.title}</div>
            </div>
          )
        })
      }
    </div>
  );
};

export default ComponentA;

