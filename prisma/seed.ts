import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {

  const todos = await prisma.todo.createMany({
    data: Array.from({length: 10}, () => ({
      name: faker.person.firstName(),
      age: faker.number.int({ min: 18, max: 80 }),
      title: faker.lorem.sentence()
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