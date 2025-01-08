
const Filter = (props) => {
    const { filterstate, setFilterstate } = props;
    const handlefilterstate = (filterstate) => {
        setFilterstate(filterstate);
      };
      return (
      <div className="hair">
              <div
                className="All"
                onClick={() => handlefilterstate("All")}
                style={{
                  background: filterstate === "All" ? "#3B81F6" : "",
                  color: filterstate === "All" ? "white" : "",
                }}
              >
                All
              </div>
              <div
                className="Active"
                onClick={() => handlefilterstate("Active")}
                style={{
                  background: filterstate === "Active" ? "#3B81F6" : "",
                  color: filterstate === "Active" ? "white" : "",
                }}
              >
                Active
              </div>
              <div
                className="Completed"
                onClick={() => handlefilterstate("Completed")}
                style={{
                  background: filterstate === "Completed" ? "#3B81F6" : "",
                  color: filterstate === "Completed" ? "white" : "",
                }}
              >
                Completed
              </div>
              <div
                className="All"
                onClick={() => handlefilterstate("log")}
                style={{
                  background: filterstate === "log" ? "#3B81F6" : "",
                  color: filterstate === "log" ? "white" : "",
                }}
              >
                Log
              </div>
            </div>
      ) ; 
    }
    export default Filter;