import "./styles/todo.css";
import Categories from "./Categories";
import Tasks from "./Tasks";
import { useState } from "react";
function ToDo() {
  const categoriesList = ["All", "Groceries", "College", "Payments"];
  const [category, setCategory] = useState("All");
  const selectCategory = (category) => {
    setCategory(category);
  };

  const highlight = (cat) => {
    return cat === category ? { color: "#EA5959" } : { color: "#525252" };
  };
  const [unCategorized, setUnCategorized] = useState([
    "Get new helmet",
    "Replace laptop's screen",
  ]);
  const [groceries, setGroceries] = useState(["Purchase Milk and corn flakes"]);
  const [college, setCollege] = useState(["Complete Assignments"]);
  const [payments, setPayments] = useState(["Pay mortgage"]);
  const [all, setAll] = useState([
    ...unCategorized,
    ...groceries,
    ...college,
    ...payments,
  ]);
  let selectedCategory;
  let setCategoryState;
  if (category === "All") {
    selectedCategory = all;
    setCategoryState = setAll;
  } else if (category === "Groceries") {
    selectedCategory = groceries;
    setCategoryState = setGroceries;
  } else if (category === "College") {
    selectedCategory = groceries;
    setCategoryState = setCollege;
  } else if (category === "Payments") {
    selectedCategory = payments;
    setCategoryState = setPayments;
  }
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const submitValue = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setCategoryState((pre) => [...pre, input]);
      setInput("");
    }
  };
  const handleUncategorized = (cat) => {
    return cat === "All" ? "Uncategorized" : category;
  };
  const removeTask = (index) => {
    setCategoryState((prevTasks) => {
      return prevTasks.filter((_, taskIndex) => taskIndex !== index);
    });
  };
  return (
    <div className="todo-app">
      <Categories
        categoryList={categoriesList}
        highlight={highlight}
        selectCategory={selectCategory}
      />
      <Tasks
        removeTask={removeTask}
        submitValue={submitValue}
        value={input}
        setCategoryState={setCategoryState}
        handleInput={handleInput}
        category={category}
        handleUncategorized={handleUncategorized}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default ToDo;
