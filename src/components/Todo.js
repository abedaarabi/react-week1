import React from "react";

const Todo = (props) => (
  <div className={props.className}>
    <p>Task: {props.taskName}</p>
    <p>Description: {props.description}</p>
    <p>Datetime {props.datetime}</p>
    <p>Deadline: {props.deadline}</p>
  </div>
);

export default Todo;
