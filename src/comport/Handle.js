import React from "react";

const Handle = ({ inputValue, handleInput, handleAdd }) => {
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