import "./App.css";
import React, { useState } from "react";
import  Filter  from "./comport/Filter.js";
function App() {
  const [todo, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [filterstate, setFilterstate] = useState("All");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };
  
  const handleAdd = (e) => {
    e.preventDefault();
    console.log(todo);

    if (inputValue === "") {
      alert("Please enter a value");
    } else {
      setTodos([
        ...todo,
        { text: inputValue, id: Date.now(), status: "Active" },
      ]);
      setInputValue("");
      setError("");
    }
  };

  const handlebox = (id) => {
    const newTodo = todo.map((todo) => {
      if (todo.id === id) {
        console.log(todo.status === "Active" ? "Completed" : "Active");

        return {
          ...todo,
          status: todo.status === "Active" ? "Completed" : "Active",
        };
      } else {
        return todo;
      }
    });

    setTodos(newTodo);
  };

  const lucky = todo.filter((todo) => {
    if (filterstate === "All") {
      return true;
    } else {
      return todo.status === filterstate;
    }
  });
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmDelete) {
      setTodos(todo.filter((todo) => todo.id !== id));
    }
  };
  const completedtaskcount = todo.filter(
    (todo) => todo.status === "Completed"
  ).length;
  const handleclear = () => {
    const confirmDelete1 = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmDelete1) {
      setTodos(todo.filter((todo) => todo.status !== "Completed"));
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <div className="main">
          <div className="head">
            <div className="eyes">
              <h1>To-Do list</h1>
            </div>
            <div className="beak">
              <form onSubmit={handleAdd}>
                <input
                  id="myInput"
                  placeholder="Add to do"
                  value={inputValue}
                  onChange={handleInput}
                />
                <button id="myBtn" type="submit">
                  ADD
                </button>
              </form>
            </div>
            <Filter filterstate={filterstate} setFilterstate={setFilterstate}/>
            {todo.length === 0 && (
              <div className="notask">No tasks yet. Add one above</div>
            )}
            {todo
              .filter((todo) => {
                if (filterstate === "All") {
                  return true;
                } else {
                  return todo.status === filterstate;
                }
              })
              .map((todo) => (
                <div key={todo} className="todo">
                  <input
                    className="todotext1"
                    type="checkbox"
                    checked={todo.status === "Completed"}
                    style={{
                      textDecoration:
                        todo.status === "Completed" ? "line-through" : "none",
                    }}
                    onChange={() => handlebox(todo.id)}
                  />

                  <p
                    className="todotext"
                    style={{
                      textDecoration:
                        todo.status === "Completed" ? "line-through" : "none",
                    }}
                  >
                    {todo.text}
                  </p>
                  <button
                    className="button"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            {todo.length > 0 && (
              <div className="footer">
                <div className="completedtask">
                  {completedtaskcount} of {todo.length} tasks completed
                </div>
                <button className="clearcompleted" onClick={handleclear}>
                  Clear completed tasks
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="foot">
          Powered by{" "}
          <a className="Pineconeacademy" href="https://pineconeacademy.mn/">
            Pinecone academy
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
