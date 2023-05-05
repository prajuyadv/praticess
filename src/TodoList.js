import React from 'react';
const TodoList=({todos,deleteHandler,deleteall})=>{
    return(
     <div>
        {todos?.map((todo,index)=>(
        <div key={index}>
        <h5>{todo}</h5>)
    <button onClick={()=>deleteHandler(index)}>delete</button>
     </div>))}
     <button onClick={()=>deleteall()}>delete all</button>
    </div>
    );
}
export default TodoList;