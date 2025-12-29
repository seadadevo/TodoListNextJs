import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.todo.deleteMany();
  const todos = await prisma.todo.createMany({
    data: Array.from({length: 10}, () => ({
      title: "Test Todo", 
      body: "Test Body Description", 
      completed: false,
      user_Id: "user_test_123"
    }))
  })
  
  console.log({ todos  });
  
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })