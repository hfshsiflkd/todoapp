import "./App.css";
import React, { useState } from "react";
import Filter from "./comport/Filter.js";
import Handle from "./comport/Handle.js";
import Box from "./comport/Box.js";
import Length from "./comport/Length.js";

function App() {
  const [todo, setTodos] = useState([]);
  const [, setError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [filterstate, setFilterstate] = useState("All");
  return (
    <div className="App">
      <div className="App-header">
        <div className="main">
          <div className="head">
            <div className="eyes">
              <h1>To-Do list</h1>
            </div>
            <Handle
              inputValue={inputValue}
              setInputValue={setInputValue}
              setTodos={setTodos}
              setError={setError}
              todo={todo}
            />
            <Filter filterstate={filterstate} setFilterstate={setFilterstate} />
            {todo.length === 0 && (
              <div className="notask">No tasks yet. Add one above</div>
            )}
            <Box todo={todo} setTodos={setTodos} filterstate={filterstate} />
            <Length setTodos={setTodos} todo={todo} />
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
