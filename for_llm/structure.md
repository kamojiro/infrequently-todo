Project Path: infrequently-todo

Source Tree:

```txt
infrequently-todo
├── README.md
├── eslint.config.js
├── for_llm
├── index.html
├── package.json
├── public
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── AddTaskForm.tsx
│   │   ├── RandomTask.tsx
│   │   └── TaskDetail.tsx
│   ├── index.css
│   ├── lib
│   │   └── supabaseClient.ts
│   ├── main.tsx
│   ├── types
│   │   └── index.ts
│   └── vite-env.d.ts
├── tsconfig.json
└── vite.config.js

```

`infrequently-todo/README.md`:

```md
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```

`infrequently-todo/eslint.config.js`:

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])

```

`infrequently-todo/index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

`infrequently-todo/package.json`:

```json
{
  "name": "infrequently-todo",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.11",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.30.1",
    "@supabase/supabase-js": "^2.52.0",
    "@types/node": "^24.0.15",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "@vitejs/plugin-react": "^4.6.0",
    "eslint": "^9.30.1",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.3.0",
    "prettier": "^3.6.2",
    "vite": "^7.0.4"
  }
}

```

`infrequently-todo/src/App.css`:

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

```

`infrequently-todo/src/App.tsx`:

```tsx
import AddTaskForm from "./components/AddTaskForm";
import RandomTask from "./components/RandomTask";

function App() {
  return (
    <div className="max-w-xl mx-auto my-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Infrequently Todo List</h1>
      <AddTaskForm />
      <RandomTask />
    </div>
  );
}

export default App;

```

`infrequently-todo/src/assets/react.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
```

`infrequently-todo/src/components/AddTaskForm.tsx`:

```tsx
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

```

`infrequently-todo/src/components/RandomTask.tsx`:

```tsx
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

```

`infrequently-todo/src/components/TaskDetail.tsx`:

```tsx
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

```

`infrequently-todo/src/index.css`:

```css
@import "tailwindcss";

/* ベースとなるフォント設定 */
:root {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  
  /* ダークモード対応 */
  color-scheme: light dark;
  
  /* フォント最適化設定 */
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* body のリセット（Tailwindのリセットに追加） */
body {
  margin: 0;
  min-height: 100vh;
}

/* ライトモードの色設定（必要に応じて） */
@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
}

/* ダークモードの色設定（必要に応じて） */
@media (prefers-color-scheme: dark) {
  :root {
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  }
}

```

`infrequently-todo/src/lib/supabaseClient.ts`:

```ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

```

`infrequently-todo/src/main.tsx`:

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

```

`infrequently-todo/src/types/index.ts`:

```ts
export interface Task {
  id: string;
  title: string;
  description: string | null;
  interest_score: number;
  created_at: string;
  updated_at: string;
}

export interface Progress {
  id: string;
  task_id: string;
  note: string | null;
  created_at: string;
}

```

`infrequently-todo/src/vite-env.d.ts`:

```ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  // 他に定義している .env の変数があればここに追加
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

```

`infrequently-todo/tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["DOM", "ES2022"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "noEmit": true
  },
  "include": ["src"]
}

```

`infrequently-todo/vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
  },
});

```