"use client";

import { createTodoActions, editTodoActions } from "@/actions/todo.actions";
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
import { todoFormSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z, { boolean } from "zod";
import { Checkbox } from "./ui/checkbox";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { Pen } from "lucide-react";
import { ITodo, TodoTableProps } from "@/interfaces";


const EditTodoDialog = ({todo}: {todo: ITodo}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof todoFormSchema>>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      title: todo.title,
      body: todo.body || "",
      completed: todo.completed
    },
  });

  useEffect(() => {
    if(open){
        form.reset({
          title: todo.title,
            body: todo.body || "",
            completed: todo.completed
        });
    }
  }, [open, todo, form]);
  async function onSubmit(values: z.infer<typeof todoFormSchema>) {
    setLoading(true);
    await editTodoActions(todo.id, {title: values.title, body: values.body, completed: values.completed});
    
    router.refresh(); 
    setLoading(false);
    setOpen(false);
  }


  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant={"outline"}><Pen size={16} /></Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Todo</DialogTitle>
            <DialogDescription>
              Edit This Todo...
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

                <FormField
                control={form.control}
                name="completed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Completed</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2"> 
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <span className="text-sm">Mark as completed</span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                <DialogFooter className="mt-4">
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit"
                  disabled={loading}>{loading ? <><Spinner/> Saving...</> : "Save"}</Button>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
  )
}

export default EditTodoDialog