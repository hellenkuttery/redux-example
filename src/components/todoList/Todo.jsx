import React from "react";
import { useDispatch } from "react-redux";
import { sil } from "../../redux/actions/todoActions";

const Todo = ({ gorev }) => {
  const { id, yazi, completed } = gorev;
  const mydispatch=useDispatch()
  return (
    <div className="p-2">
      <p className="fs-5" style={{ textDecoration: gorev.completed ? "line-through" : "none" }}>
        {gorev.yazi} <span className="btn btn-success m-1" >👌</span> 
        <button className="btn btn-warning" onClick={()=>mydispatch(sil(gorev.id))} >❌</button>
      </p>
    </div>
  );
};

export default Todo;
