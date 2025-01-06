import { getByDisplayValue } from "@testing-library/react";
import "./App.css";
import React, { useState } from "react";
function App() {
  const [todo, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [filterstate, setFilterstate] = useState("All");


  const handleInput = (event) => {
    setInputValue(event.target.value);
  };
  const handlefilterstate = (filterstate) => {
    setFilterstate(filterstate);
  };
  const handleAdd = () => {
    console.log(todo);
    
    if (inputValue === "") {
      alert("Please enter a value");
    } else {
      setTodos([...todo, {text: inputValue, id: Date.now(), status: "Active"}]);
      setInputValue("");
      setError("");
    }
  };
  const handlebox = (id) => {
    const newTodo = todo.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: "Completed" };
      } else {
        return todo;
      }
    });
  };



  console.log(filterstate);
  const ll = todo
  .filter((todo) => {
    if (filterstate === "All") {
      return true;
    } else {
      return todo.status === filterstate;
    }
  })
  console.log(ll);
  
  return (
    <div className="App">
      <div className="App-header">
        <div className="main">
          <div className="head">
            <div className="eyes">
              <h1>To-Do list</h1>
            </div>
            <div className="beak">
              <input
                placeholder="Add to do"
                value={inputValue}
                onChange={handleInput}
              />
              <button onClick={handleAdd}>ADD</button>
            </div>
            <div className="hair">
              <div className="All" onClick={() => handlefilterstate("All")}>
                All
              </div>
              <div
                className="Active"
                onClick={() => handlefilterstate("Active")}
                style={{ color: "red" }}
              >
                Active
              </div>
              <div
                className="Completed"
                onClick={() => handlefilterstate("Completed")}
              >
                Completed
              </div>
            </div>
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
                  <input className="todotext1" type="checkbox"  onClick={() => handlebox(todo.id)} />
                  <p className="todotext">{todo.text}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="foot">Powered by Pinecone academy</div>
      </div>
    </div>
  );
}

export default App;
