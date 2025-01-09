const Length = (props) => {
  const { setTodos, todo } = props;
  const handleclear = () => {
    const confirmDelete1 = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmDelete1) {
      setTodos(todo.filter((todo) => todo.status !== "Completed"));
    }
  };
  const completedtaskcount = todo.filter(
    (todo) => todo.status === "Completed"
  ).length;

  return (
    todo.length > 0 && (
      <div className="footer">
        <div className="completedtask">
          {completedtaskcount} of {todo.length} tasks completed
        </div>
        <button className="clearcompleted" onClick={handleclear}>
          Clear completed tasks
        </button>
      </div>
    )
  );
};
export default Length;
