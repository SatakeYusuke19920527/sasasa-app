import React,{useState,useReducer} from 'react'
import { Link } from 'react-router-dom'
import { ADD_EVENT } from '../actions/index';
import reducer from '../Reducer/index'
import {Table, Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentB = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_EVENT,
      title,
      body
    });
  setTitle('');
  setBody('');
};


  return (
    <div>
    <div>ComponentB</div>
      <Link to="/">ComponentAへ移動</Link>
      <Link to="/componentc" >ComponentCへ移動</Link>
    
    <Form>
        <Form.Group controlId="forBasicPassword">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="test"
            placeholder="title"
            volue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        <Form.Label>Body</Form.Label>
          <Form.Control
            type="test"
            placeholder="body"
            volue={body}
            onChange={(e) => setBody(e.target.value)}
            />
        </Form.Group>
        <Button variant="primary" onClick={handleClick}>
          イベント作成
        </Button>
        <Button variant="danger"　delTodo  onClick={handleClick}>
          イベント全削除
        </Button>
      </Form>
      
    <h1>Table</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>id</th>
          <th>title</th>
          <th>id</th>
          <th>#</th>
          </tr>
        </thead>
        <tbody>
          {state.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.body}</td>
                <td>
                  <Button variant="danger">削除</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
    </Table>
    </div>
)
  }

export default ComponentB;