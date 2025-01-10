import React from "react";

const Box = (props) => {
  const { setTodos, todo, filterstate , } = props;

  const handlebox = (id) => {
    // const task = todo.find((task) => task.id === id);
    // const newStatus = task.status ==="Active" ? "Completed" : "Active";
    const newTodo = todo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: todo.status === "Active" ? "Completed" : "Active",
        };
      } else {
        return todo;
      }
    });

    setTodos(newTodo);
    console.log(newTodo);
    
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmDelete) {
      setTodos(todo.filter((todo) => todo.id !== id));
    }
  };

  const filter = todo.filter((todo_item) => {
    if (filterstate === "All") {
      return true;
    } else {
      return todo_item.status === filterstate;
    }
  });
console.log(props);

  return filter.map((todo) => (
    <div key={todo.id} className="todo">
      <input
        className="todotext1"
        type="checkbox"
        checked={todo.status === "Completed"}
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



export default Box;
