import React, { useContext } from 'react'
import { TodoContext } from './TodoProvider'

const List = () => {
  const {state,dispatch} = useContext(TodoContext)

  const updateTodo = (index)=>{
    dispatch({type:"EditTodo",index})
  }
  const deleteTodo = (index)=>{
    dispatch({type:"Remove",index})
  }
  return (
    <div>
      {state.todos?.map((todo,index)=>{
        return (
          <div key={index} style={{ border:"1px solid #000", marginTop:"30px",padding:"20px 50px" ,textAlign:"center"}}>
            <h3>{todo.title}</h3>
            <p>{todo.desc}</p>
            <button onClick={()=>updateTodo(index)}>Update</button>
            <button onClick={()=>deleteTodo(index)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default List