import { React, useState, useEffect } from "react";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];
function Add({ item, onRemove }) {
  return (
    <div>
      <input type="checkbox" id={item.id} />
      <label> {item.description}</label>
      <button on onClick={onRemove}>
        Delete
      </button>
    </div>
  );
}

function List() {
  const [addtodo, setAddTodo] = useState(todos);
  function removeItem(id) {
    const newList = addtodo.filter((item) => item.id !== id);
    setAddTodo(newList);
  }
  function addTodos() {
    setAddTodo(addtodo);
  }
  return (
    <div>
      <button onClick={addTodos}>Add Todo</button>
      {addtodo.map((item) => (
        <div key={item.id.toString()}>
          <Add item={item} onRemove={() => removeItem(item.id)} />
        </div>
      ))}
    </div>
  );
}

function Todos() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>You Have Used {seconds} on this website</h3>
      <List />
    </div>
  );
}

export default Todos;
