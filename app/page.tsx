import { getTodoListActions } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import { TodoTable } from "@/components/TodoTable";

export default async function Home() {
  const todos = await getTodoListActions();

  

  return (
    <main className="max-w-7xl mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Todos</h1>
        <AddTodoForm />
      </div>
      <TodoTable data={todos} />
      
    </main>
  );
}
