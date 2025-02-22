import React, { useState } from "react";
export default function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  function handleAddTask() {
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
    setTaskText("");
  }

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id != id));
  }

  return (
    <>
      <h1>Todo List App</h1>
      <input
        type="text"
        placeholder="Enter the task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
