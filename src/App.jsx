import React, { useReducer } from "react";
import "./App.css";
import TodoProvider from "./TodoProvider";
import Form from './Form.jsx'
import List from './List.jsx'
const App = () => {
  return (
    <TodoProvider>

    <div className="container">
    <Form/>
    <List />
    </div>
    </TodoProvider>
  );
};

export default App;
