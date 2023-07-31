"use client";

import { addTodo } from "@/api";
import { useState } from "react";
import type { FormEvent } from "react";
import { v4 as uuidv4, v4 } from "uuid";

function generateRandomNumberId(length: number) {
  const uuid = uuidv4().replace(/-/g, ""); // UUIDを取得してハイフンを削除
  const randomNumberId = parseInt(uuid, 16).toString().slice(0, length); // 16進数の文字列を10進数の数字に変換して指定した桁数に調整
  return randomNumberId;
}

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await addTodo({
      id: uuidv4(),
      text: taskTitle,
    });

    setTaskTitle("");
  };

  return (
    <form className="md-4 space-y-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
        onChange={(e) => setTaskTitle(e.target.value)}
        value={taskTitle}
      />
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-400 hover:scale-95 duration-200">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
