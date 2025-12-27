'use server';

import { PrismaClient } from '@prisma/client'

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

    
}