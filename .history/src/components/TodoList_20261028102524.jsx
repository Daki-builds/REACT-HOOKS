import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
}

const handleAddTodo = (e) => {
  e.preventDefault();
  if (inputValue.trim() === "") return;

  const newTodo = {
    id: Date.now(),
    text: inputValue,
  };

  setTodos([...todos, newTodo]);
  setInputValue("");
};

const handleDeleteTodo = (idToDelete) => {
  const updatedTodos = todos.filter((todo) => todo.id !== idToDelete);
  setTodos(updatedTodos);
};

return (
  <div>
    <h2>Todo List</h2>

    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>

    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default TodoList;
