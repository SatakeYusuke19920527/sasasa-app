import React,{useState,useReducer} from 'react'
import { Link } from 'react-router-dom'
import { ADD_EVENT, DELETE_ALL_EVENT, ALL_EVENT } from '../actions/index';
import reducer from '../Reducer/index'
import {Table, Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentB = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [comment, setComment] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_EVENT,
      title,
      body,
      comment
    });
    setTitle('');
    setBody('');
    setComment('');
  };
  
      const handleClick1 = (e) => {
    e.preventDefault();
    dispatch({
      type: DELETE_ALL_EVENT,
      title,
      body,
      comment
    });
    setTitle('');
    setBody('');
    setComment('');
      };
  
        const handleClick2 = (e) => {
    e.preventDefault();
    dispatch({
      type: ALL_EVENT,
      title,
      body,
      comment
    });
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
        <Form.Label>Comment</Form.Label>
          <Form.Control
            type="test"
            placeholder="comment"
            volue={comment}
            onChange={(e) => setComment(e.target.value)}
            />
        </Form.Group>
        <Button variant="primary" onClick={handleClick}>
          イベント作成
        </Button>
        <Button variant="danger"　delTodo onClick={handleClick1}>
          イベント全削除
        </Button>
      </Form>
      
    <h1>Table</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>id</th>
          <th>title</th>
          <th>body</th>
         <th>comment</th>
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
                <td>{data.comment}</td>
                <td>
                  <Button variant="danger" delTodo onClick={handleClick2}>削除</Button>
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