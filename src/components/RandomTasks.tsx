import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import type { Task } from "../types";
import TaskDetail from "./TaskDetail"; // 詳細表示用（前と同じ）

// 表示したいタスク数
const NUM_TO_SHOW = 3;

export default function RandomTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [displayTasks, setDisplayTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [detailTask, setDetailTask] = useState<Task | null>(null);

  // 全タスク取得
  const fetchTasks = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("tasks").select("*");
    if (!error && data) {
      setTasks(data);
      setDisplayTasks(pickRandomTasks(data));
    }
    setLoading(false);
  };

  // N件ランダムに選ぶ（重複なし）
  function pickRandomTasks(arr: Task[]): Task[] {
    if (arr.length <= NUM_TO_SHOW) return arr;
    const picked: Task[] = [];
    const used = new Set<number>();
    while (picked.length < NUM_TO_SHOW) {
      const idx = Math.floor(Math.random() * arr.length);
      if (!used.has(idx)) {
        picked.push(arr[idx]);
        used.add(idx);
      }
    }
    return picked;
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  // 別パターン表示
  const showAnother = () => {
    setDisplayTasks(pickRandomTasks(tasks));
  };

  return (
    <div className="my-6">
      <button
        className="mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200"
        onClick={showAnother}
        disabled={loading || tasks.length < 2}
      >
        {loading ? "読み込み中..." : "別のタスクを表示"}
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {displayTasks.length === 0 ? (
          <div className="text-gray-400">タスクがありません</div>
        ) : (
          displayTasks.map((task) => (
            <div
              key={task.id}
              className="p-4 border rounded shadow-sm bg-white cursor-pointer hover:shadow-md transition"
              onClick={() => setDetailTask(task)}
            >
              <div className="font-semibold text-lg mb-1">{task.title}</div>
              {task.description && (
                <div className="text-gray-600">{task.description}</div>
              )}
            </div>
          ))
        )}
      </div>

      {detailTask && (
        <TaskDetail task={detailTask} onClose={() => setDetailTask(null)} />
      )}
    </div>
  );
}
