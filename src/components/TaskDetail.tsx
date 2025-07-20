import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import type { Task, Progress } from "../types";

interface TaskDetailProps {
  task: Task;
  onClose: () => void;
}

export default function TaskDetail({ task, onClose }: TaskDetailProps) {
  const [progressList, setProgressList] = useState<Progress[]>([]);
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  // 進捗履歴を取得
  const fetchProgress = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("progress")
      .select("*")
      .eq("task_id", task.id)
      .order("created_at", { ascending: false });
    setProgressList(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    fetchProgress();
    // eslint-disable-next-line
  }, [task.id]);

  // 進捗を追加
  const addProgress = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!note.trim()) return;
    setLoading(true);
    await supabase.from("progress").insert([
      {
        task_id: task.id,
        note: note.trim(),
      },
    ]);
    setNote("");
    fetchProgress();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-2">{task.title}</h2>
        <div className="text-gray-600 mb-4">{task.description}</div>

        <form onSubmit={addProgress} className="mb-4">
          <textarea
            className="w-full border rounded p-2 mb-2"
            placeholder="進捗やメモを記録"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={2}
            maxLength={300}
            disabled={loading}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
            disabled={loading || !note.trim()}
          >
            進捗を記録
          </button>
        </form>

        <h3 className="font-semibold mb-2">進捗履歴</h3>
        {progressList.length === 0 ? (
          <div className="text-gray-400">まだ進捗はありません</div>
        ) : (
          <ul className="space-y-2 max-h-52 overflow-y-auto">
            {progressList.map((p) => (
              <li key={p.id} className="border-b pb-1 text-sm">
                <span className="text-gray-500 mr-2">
                  {new Date(p.created_at).toLocaleString()}
                </span>
                {p.note}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
