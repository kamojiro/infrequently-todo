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
