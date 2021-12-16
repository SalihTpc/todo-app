import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-list">
      {filteredTodos.map((todo) => (
        <Todo
          setTodos={setTodos}
          todos={todos}
          todo={todo}
          text={todo.text}
          id={todo.id}
        />
      ))}
    </div>
  );
};
export default TodoList;
