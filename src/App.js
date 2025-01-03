import { getByDisplayValue } from "@testing-library/react";
import "./App.css";
import React, { useState } from "react";
function App() {
  const [todo, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("All");
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };
  const handleAdd = () => {
    if (inputValue === "") {
      alert("Please enter a value");
    } else {
      setTodos([...todo, inputValue]);
      setInputValue("");
      setError("");
    }
    
  };
  const handlebox = (id) => {
    const newTodo = todo.map((todo, index) => {
      if (index === id) {
        return { ...todo, status: "DONE" };
      }else {
        return todo;
      }
      
    });
    setTodos(newTodo);
  }

  return (
    <div className="App">
      <div className="App-header">
        <div class="main">
          <div class="head">
            <div class="eyes">
              <h1>To-Do list</h1>
            </div>
            <div class="beak">
              <input
                placeholder="Add to do"
                value={inputValue}
                onChange={handleInput}
              />
              <button onClick={handleAdd}>ADD</button>
            </div>
            <div class="hair">
              <div class="All" onClick={() => filter} >All</div>
              <div class="Active">Active</div>
              <div class="Completed">Completed</div>
            </div>
          </div>
          <div class="feet" >
            {todo.map((todo) => {
              return <div>{todo}</div>;
            })}
          </div>
        </div>
        <div class="foot">Powered by Pinecone academy</div>
      </div>
    </div>
  );
}

export default App;
