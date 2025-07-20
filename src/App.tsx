import {
  RouterProvider,
  createBrowserRouter,
  Link,
  Outlet,
} from "react-router";

import AddTaskForm from "./components/AddTaskForm";
import RandomTasks from "./components/RandomTasks";
import TaskList from "./components/TaskList";

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">おすすめ</Link>
        <Link to="/list" className="ml-4">一覧</Link>
      </nav>
      <AddTaskForm />
      <Outlet /> {/* ← ここが子ルート表示位置！ */}
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ← ここで親レイアウトを使う
    children: [
      { path: "/", element: <RandomTasks /> },
      { path: "/list", element: <TaskList /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
