import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import {Task, Progress} from "../types";

// コンポーネントのProps型定義
interface AddTaskFormProps {
  onTaskAdded?: (task: Task) => void;
}

export default function AddTaskForm({ onTaskAdded }: AddTaskFormProps) {
  // フォームの入力値を管理するstate
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // UIの状態を管理するstate
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // バリデーション関数
  const validateForm = (): boolean => {
    const sanitizedTitle = title.trim();

    if (!sanitizedTitle) {
      setError("タスク名を入力してください");
      return false;
    }

    if (sanitizedTitle.length > 100) {
      setError("タスク名は100文字以内で入力してください");
      return false;
    }

    if (description.length > 500) {
      setError("説明は500文字以内で入力してください");
      return false;
    }

    return true;
  };

  // フォーム送信処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // エラーと成功メッセージをリセット
    setError(null);
    setSuccessMessage(null);

    // バリデーションチェック
    if (!validateForm()) return;

    // 入力値のサニタイズ
    const sanitizedTitle = title.trim();
    const sanitizedDescription = description.trim();

    setIsLoading(true);

    try {
      // Supabaseにタスクを追加
      const { data, error } = await supabase
        .from("tasks")
        .insert([
          {
            title: sanitizedTitle,
            description: sanitizedDescription || null,
            // interest_scoreはデフォルト値の0が自動的に設定される
          },
        ])
        .select()
        .single();

      if (error) throw error;

      // 成功時の処理
      setTitle("");
      setDescription("");
      setSuccessMessage("タスクを追加しました！");

      // 親コンポーネントに通知
      if (data && onTaskAdded) {
        onTaskAdded(data);
      }

      // 成功メッセージを3秒後に消す
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } catch (err) {
      // エラーハンドリング
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("タスクの追加に失敗しました");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      {/* エラーメッセージ表示 */}
      {error && (
        <div
          className="p-3 bg-red-100 border border-red-400 text-red-700 rounded"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {/* 成功メッセージ表示 */}
      {successMessage && (
        <div
          className="p-3 bg-green-100 border border-green-400 text-green-700 rounded"
          role="alert"
        >
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}

      {/* タスク名入力フィールド */}
      <div>
        <label
          htmlFor="task-title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          タスク名 <span className="text-red-500">*</span>
        </label>
        <input
          id="task-title"
          name="title"
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          placeholder="例: レポートを作成する"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          aria-required="true"
          aria-invalid={!!error}
          aria-describedby={error ? "error-message" : undefined}
          disabled={isLoading}
          maxLength={100}
        />
        <p className="mt-1 text-sm text-gray-500">
          残り {100 - title.length} 文字
        </p>
      </div>

      {/* 説明入力フィールド */}
      <div>
        <label
          htmlFor="task-description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          説明（任意）
        </label>
        <textarea
          id="task-description"
          name="description"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          placeholder="タスクの詳細を入力してください"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={isLoading}
          rows={3}
          maxLength={500}
        />
        <p className="mt-1 text-sm text-gray-500">
          残り {500 - description.length} 文字
        </p>
      </div>

      {/* 送信ボタン */}
      <button
        type="submit"
        className={`
          w-full px-4 py-2 font-medium rounded-md transition-colors
          bg-blue-500 text-white
          hover:bg-blue-600
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed
        `}
        disabled={isLoading || title.trim() === ""}
      >
        {isLoading ? "処理中..." : "タスクを追加"}
      </button>
    </form>
  );
}
