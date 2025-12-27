'use server';

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const getTodoListActions = async () => {
    const todos = await prisma.todo.findMany()
    return todos;
}
export const createTodoActions = async () => {

}