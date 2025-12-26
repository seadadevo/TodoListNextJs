import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  const todo1 = await prisma.todo.create({
    data: {
      name: "Ali",
      title: "Learn Next.js with Prisma",
      age: 25,
    }
  })
  const todo2 = await prisma.todo.create({
    data: {
      name: "Sara",
      title: "Finish the project",
      age: 22,
    }
  })
  
  console.log({ todo1, todo2 });
  
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })