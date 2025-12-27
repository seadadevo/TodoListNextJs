import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  await prisma.todo.deleteMany();
  const todos = await prisma.todo.createMany({
    data: Array.from({length: 10}, () => ({
      title: faker.lorem.sentence(2),
      body: faker.lorem.paragraph(),
    }))
  })
  
  console.log({ todos  });
  
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })