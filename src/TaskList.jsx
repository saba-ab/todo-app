import React from "react";
import deleteButton from "./deleteButton.svg";
import { useState } from "react";
import "./styles/taskList.css";
function TaskList({ selectedCategory, category, removeTask }) {
  const [styledP, setStyledP] = useState([]);

  const handleStyles = (index) => {
    styledP.includes(index)
      ? setStyledP((prev) => prev.filter((i) => i !== index))
      : setStyledP((prev) => [...prev, index]);
  };
  return (
    <div className="list-container">
      {selectedCategory.map((task, index) => (
        <div key={index} className="list-item">
          <div className="checkbox" onClick={() => handleStyles(index)}></div>
          <p
            style={
              styledP.includes(index) ? { textDecoration: "line-through" } : {}
            }
          >
            {task}
          </p>
          <div className="category">{category}</div>
          <div className="delete">
            <img
              src={deleteButton}
              alt="delete"
              onClick={() => removeTask(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
