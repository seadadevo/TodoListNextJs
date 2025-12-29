'use server';

import { auth } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export const getTodoListActions = async () => {
    const { userId } = await auth();

    if (!userId) {
        return [];
    }

    const todos = await prisma.todo.findMany({
        where: {
            user_Id: userId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return todos;
}
export const createTodoActions = async ({title, body, completed}: {title: string, body?: string | undefined, completed?: boolean}) => {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("User is not authenticated (Server Side Check Failed)");
    }

    try {
        await prisma.todo.create({
            data: {
                title,
                body,
                completed,
                user_Id: userId
            }
        })
        revalidatePath('/'); 
    } catch (error) {
        throw new Error("Failed to create todo in database");
    }
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

export const editTodoActions = async (id:string, { title, body, completed}: { title: string, body?: string | undefined, completed?: boolean}) => {
    const todos = await prisma.todo.update({
        where: {
            id, 
        },
        data: {
            title,
            body,
            completed 
        }
    })

    revalidatePath('/');   
    return todos;

}