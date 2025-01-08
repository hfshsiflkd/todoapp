import React from "react";

const Map = ({ todos, handlebox, handleDelete }) => {
  return todos.map((todo) => (
    <div key={todo.id} className="todo">
      <input
        className="todotext1"
        type="checkbox"
        checked={todo.status === "Completed"}
        style={{
          textDecoration: todo.status === "Completed" ? "line-through" : "none",
        }}
        onChange={() => handlebox(todo.id)}
      />
      <p
        className="todotext"
        style={{
          textDecoration: todo.status === "Completed" ? "line-through" : "none",
        }}
      >
        {todo.text}
      </p>
      <button className="button" onClick={() => handleDelete(todo.id)}>
        Delete
      </button>
    </div>
  ));
};

export default Map;
