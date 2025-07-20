import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import type { Task } from "../types";
import TaskDetail from "./TaskDetail";

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [detailTask, setDetailTask] = useState<Task | null>(null);

  const fetchTasks = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("tasks").select("*").order("created_at", { ascending: false });
    if (!error && data) {
      setTasks(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-gray-500">読み込み中...</div>
      ) : tasks.length === 0 ? (
        <div className="text-gray-400">タスクがありません</div>
      ) : (
        <ul className="divide-y">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="p-3 cursor-pointer hover:bg-blue-50"
              onClick={() => setDetailTask(task)}
            >
              <div className="font-semibold">{task.title}</div>
              {task.description && <div className="text-gray-500 text-sm">{task.description}</div>}
            </li>
          ))}
        </ul>
      )}
      {detailTask && <TaskDetail task={detailTask} onClose={() => setDetailTask(null)} />}
    </div>
  );
}
