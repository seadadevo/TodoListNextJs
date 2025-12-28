'use server';

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export const getTodoListActions = async () => {
    const todos = await prisma.todo.findMany()
    return todos;
}
export const createTodoActions = async ({title, body, completed}: {title: string, body?: string | undefined, completed?: boolean}) => {
    await prisma.todo.create({
        data: {
            title,
            body,
            completed
        }
    })
    revalidatePath('/'); 
}

export const deleteTodoActions = async (id: string) => {
    const todos = await prisma.todo.delete({
        where: {
            id, 
        }
    })

    revalidatePath('/');   
    return todos;

}