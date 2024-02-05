import React, { createContext } from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
    return{
        ...state,
        todos:[...state.todos,action.payload]
    }
    case "Update":
    return{
        ...state,
        todos:state.todos.map((todo,index)=>{
            return index === action.payload.index ?{
                title:action.payload.title,
                desc:action.payload.desc,
            }:todo

        })

    }

    case "Remove":
        return{
            ...state,
             todos:state.todos.filter((todo,index)=>{
                 return index!== action.index
             })

        }
    case "EditTodo":
    return{
        ...state,
        editIndex:action.index
    }
    default:
      return state;
  }
};

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { todos: [] ,editIndex:null});
  console.log(state)

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;
