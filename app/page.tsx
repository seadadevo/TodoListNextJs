import AddTodoForm from "@/components/AddTodoForm";

export default async function Home() {
  // const todos = await getTodoListActions();

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Welcome to the Todo App</h1>

      <AddTodoForm/>
      
    </main>
  );
}
