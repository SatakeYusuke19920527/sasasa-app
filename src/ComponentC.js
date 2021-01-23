import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const ComponentC = () => {
  const history = useHistory()
  const backPage = () => {
    history.push("/")
  }
  
  return (
    <div>
      <div>ComponentC</div>
      <button onClick={backPage}>ホームへ戻る</button>
      <Link to="/componentb" >ComponentBへ移動</Link>
    </div>
)
}

export default ComponentC;