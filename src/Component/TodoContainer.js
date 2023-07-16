import React from "react";
import Todoitems from "./TodoItems";
import "./TodoContainer.css";

function TodoContainer(props) {

  return (
    <div className = "list_container">
      <div className = "heading">
      <h1>To-Do List</h1>
      </div>
      <hr />
      {props.item.map((sitem) => {
        return (
          <div>
            <Todoitems sitem={sitem} key={sitem.id} onDelete = {props.onDelete}></Todoitems>
          </div>
        );
      })}
      </div>
  );
}

export default TodoContainer;
