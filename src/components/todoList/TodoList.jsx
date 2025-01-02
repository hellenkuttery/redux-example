import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoReducers } from "../../redux/reducers/todoReducers";
import Todo from "./Todo";
import { ekle } from "../../redux/actions/todoActions";

const TodoList = () => {
  const { gorevler } = useSelector((state) => state.todoReducers);
  const mydispatch=useDispatch()
  const [newTodo,setNewTodo]=useState("")
  console.log(newTodo)
  const handleSubmit=(e)=>{
    e.preventDefault()
    mydispatch(ekle(newTodo))

  }

  return (
    <div>
      <h3>Todo list</h3>
      <form action="" onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center">
      <input type="text" className="form-control w-50 m-1 h-25" onChange={(e)=>setNewTodo(e.target.value)} />
      <button className="btn btn-success h-25">Add</button>
      </form>
      {gorevler.map((gorev) => (
        <Todo gorev={gorev} />
      ))}
    </div>
  );
};

export default TodoList;
