"use client";

import { getTodoListActions } from "@/actions/todo.actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const todoFormSchema = z.object({
  title: z.string().min(4, {
    message: "Title must be at least 4 characters.",
  })
  .max(100, {
    message: "Title must be at most 100 characters.",
  }),
  body: z.string().min(20, {
    message: "Body must be at least 20 characters.",
  }).optional(),
});

export default function Home() {
  // const todos = await getTodoListActions();

  const form = useForm<z.infer<typeof todoFormSchema>>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      title: "",
      body: "",
    },
  });

  function onSubmit(values: z.infer<typeof todoFormSchema>) {
    console.log(values);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Welcome to the Todo App</h1>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"}>Open Dialog</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create A New Todo</DialogTitle>
            <DialogDescription>
              Create a New Todo as you Like...
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Todo Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter todo title..." {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the main title of your task.
                      </FormDescription>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="body"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Todo Content</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter todo Content..." {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the main Content of your task.
                      </FormDescription>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter className="mt-4">
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Create</Button>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
