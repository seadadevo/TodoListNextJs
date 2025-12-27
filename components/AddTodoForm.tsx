"use client";

import { createTodoActions } from "@/actions/todo.actions";
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
import z from "zod";
import { Checkbox } from "./ui/checkbox";

const AddTodoForm = () => {

  const form = useForm<z.infer<typeof todoFormSchema>>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      title: "",
      body: "",
      completed: false
    },
  });

  async function onSubmit(values: z.infer<typeof todoFormSchema>) {
    console.log(values);
    await createTodoActions({title: values.title, body: values.body, completed: values.completed});
    form.reset();
  }


  return (
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

                <FormField
                  control={form.control}
                  name="completed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Completed</FormLabel>
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
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
  )
}

export default AddTodoForm