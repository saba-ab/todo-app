import "./styles/tasks.css";
import TaskList from "./TaskList";
function Tasks({
  handleInput,
  category,
  handleUncategorized,
  selectedCategory,
  setCategoryState,
  value,
  submitValue,
  removeTask,
}) {
  return (
    <div className="tasks">
      <h1>{category} Tasks</h1>
      <input
        onKeyDown={submitValue}
        value={value}
        type="text"
        onChange={handleInput}
        placeholder={`Add new task inside '${category}' category`}
      />
      <TaskList
        selectedCategory={selectedCategory}
        category={category}
        removeTask={removeTask}
      />
    </div>
  );
}

export default Tasks;
