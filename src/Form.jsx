import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { TodoContext } from './TodoProvider'

const Form = () => {
  const [title,setTitle] = useState('')
  const [desc,setDesc] = useState('')
  const {dispatch,state} = useContext(TodoContext)
  
  const HandleSubmit = () =>{
    if(state.editIndex !== null){
      dispatch({type:"Update",payload:{title,desc,index:state.editIndex}})

    }else{
      dispatch({type:"Add",payload:{title,desc}})
    
    }
    setTitle('')
    setDesc('')
  }
  useEffect(()=>{
    if(state.editIndex !== null){
      setTitle(state.todos[state.editIndex].title)
      setDesc(state.todos[state.editIndex].desc)
    }
  },[state.editIndex])
  return (
    <div className='container'>
      <input value={title} type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Title" />
      <input value={desc} type="text" onChange={(e)=>setDesc(e.target.value)} placeholder="Desc" />
      <button disabled={title&&desc?false:true} onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Form