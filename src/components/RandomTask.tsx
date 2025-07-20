import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import type { Task } from "../types";
import TaskDetail from "./TaskDetail";

export default function RandomTask() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(false);

  // タスク全件取得
  const fetchTasks = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("tasks").select("*");
    if (!error && data) {
      setTasks(data);
      if (data.length > 0) {
        setCurrentTask(data[Math.floor(Math.random() * data.length)]);
      } else {
        setCurrentTask(null);
      }
    }
    setLoading(false);
  };

  // 最初に1回だけ取得
  useEffect(() => {
    fetchTasks();
  }, []);

  // 別のタスクをランダム表示
  const showAnotherTask = () => {
    if (tasks.length > 1) {
      let newTask: Task;
      do {
        newTask = tasks[Math.floor(Math.random() * tasks.length)];
      } while (newTask.id === currentTask?.id && tasks.length > 1);
      setCurrentTask(newTask);
    }
  };

  const [showDetail, setShowDetail] = useState(false);

return (
    <div className="my-6">
      <button
        className="mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200"
        onClick={showAnotherTask}
        disabled={loading || tasks.length < 2}
      >
        {loading ? "読み込み中..." : "別のタスクを表示"}
      </button>

      {currentTask ? (
        <div
          className="p-4 border rounded shadow-sm bg-white cursor-pointer hover:shadow-md transition"
          onClick={() => setShowDetail(true)}
        >
          <div className="font-semibold text-lg mb-1">{currentTask.title}</div>
          {currentTask.description && (
            <div className="text-gray-600">{currentTask.description}</div>
          )}
        </div>
      ) : (
        <div className="text-gray-400">タスクがありません</div>
      )}

      {showDetail && currentTask && (
        <TaskDetail task={currentTask} onClose={() => setShowDetail(false)} />
      )}
    </div>
  );
}
