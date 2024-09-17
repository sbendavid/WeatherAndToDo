let todoList = [];

// Function to add a new task
function createTodo(task) {
  todoList.push(task);
  return `Task "${task}" added to your To-Do list.`;
}

// Function to remove a task by index
function deleteTodo(index) {
  if (index >= 0 && index < todoList.length) {
    const removedTask = todoList.splice(index, 1);
    return `Task "${removedTask}" removed from your To-Do list.`;
  } else {
    return "Invalid task index.";
  }
}

// Function to view all tasks
function viewAllTodo() {
  if (todoList.length === 0) {
    return "Your To-Do list is empty.";
  }
  return todoList.map((task, index) => `${index + 1}. ${task}`).join(" ");
}

module.exports = { createTodo, deleteTodo, viewAllTodo };
