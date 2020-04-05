import React from "react";

function Checkbox(props) {
  return (
    <div className="todoList">
      <input type="checkbox" />
      <p>{props.todo}</p>
    </div>
  );
}

export default Checkbox;
