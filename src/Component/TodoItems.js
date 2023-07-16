import React from "react";

function Todoitems({sitem,onDelete}) {
  return (
    <div className = "items">
      <h1>{sitem.task}</h1>
      <h2>{sitem.des}</h2>
      <button className="btn btn-sm btn-danger" onClick = {() => {onDelete(sitem)}}>delete</button>
      <hr />
    </div>
  );
}

export default Todoitems;
