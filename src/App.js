import "./App.css";
import React, { useState } from "react";
import Filter from "./comport/Filter.js";
import Handle from "./comport/Handle.js";
import Box from "./comport/Box.js";
import Length from "./comport/Length.js";
import Foot from "./comport/Foot.js";
import Head from "./comport/Head.js"

function App() {
  const [todo, setTodos] = useState([]);
  const [, setError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [filterstate, setFilterstate] = useState("All");
  // const [log , setlog ] = useState ([]);
  
  return (
    <div className="App">
      <div className="App-header">
        <div className="main">
          <div className="head">
            <Head/>
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
        <Foot />
      </div>
    </div>
  );
}

export default App;
