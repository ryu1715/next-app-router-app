import { Task } from "@/types";
import { todo } from "node:test";
import React from "react";
import Todo from "./Todo";

type TodoListProps = {
  todos: Task[];
};

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className="my-3">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
