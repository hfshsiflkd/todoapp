import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div class="main">
          <div class="head">
            <div class="eyes">
              <h1>To-Do list</h1>
            </div>
            <div class="beak">
              <input></input>
              <button>ADD</button>
            </div>
            <div class="hair">
              <div class="All">All</div>
              <div class="Active">Active</div>
              <div class="Completed">Completed</div>
            </div>
          </div>
          <div class="feet">
          No tasks yet. Add one above!
          </div>
        </div>
        <div class="foot">
        Powered by
        Pinecone academy
        </div>
      </div>
    </div>
  );
}


export default App;
