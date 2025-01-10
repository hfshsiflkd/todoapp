import React from "react";

const Handle = (props) => {
  const { setInputValue, inputValue, setTodos, setError, todo,log, setlog};
   } = props;

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();

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
     setlog (
      [
        ...log , {
          taskdes
        }
      ]
     )
  };

  return (
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
  );
};

export default Handle;
