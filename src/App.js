import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [data, setdata] = useState([]);
 const [todos, setTodos] =useState([]);

  const submitHandler =e=>{
    e.preventDefault();
    console.log()
    const newTodos = [...todos, data];
    setTodos(newTodos);
    setdata("");
  }

  const deleteall=()=>{
    setdata('');
    setTodos('');
  }

  const deleteHandler=(indexvalue)=>{
  const newtods=todos.filter((todo,index)=>index !== indexvalue)
  setTodos(newtods)
  }

  return (
    <div>
      <center>
      <form onSubmit={submitHandler}>
          <h1>Todos</h1>
          <input
            type="text"
            name="text"
            value={data}
            onChange={(e) => setdata(e.target.value)}
          />

          <br />
          <input type="submit" value="Add" name="Add" />
      </form>
      <TodoList todos={todos} deleteHandler={deleteHandler} deleteall={deleteall}/> 
      </center>
    </div>
  );
};
export default App;
