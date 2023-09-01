import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient({ log: ["query"] })
const prisma = new PrismaClient()



async function main() {


    // const user = await prisma.user.create({ data: { name: "Sally" } })
    // const users = await prisma.user.findMany()


    // await prisma.user.deleteMany()
    // const users = await prisma.user.createMany({
    //     data: [{
    //         name: "Kyle",
    //         email: "kyle@test.com",
    //         age: 26,

    //     }, {
    //         name: "Sally",
    //         email: "sally@test.com",
    //         age: 32,

    //     }]

    // })
    // console.log(users)




    const user = await prisma.user.findMany({
        where: {
            // OR: [
            // AND: [
            //     { email: { startsWith: "sally" } },
            //     { email: { endsWith: "@test.com" } }
            // ]

            NOT: { email: { startsWith: "sally" } }
            // NOT: { email: { endsWith: "@test.com" } }

            // writtenPosts: {
            //     some: {
            //         title: { startsWith: "Test" }
            //     }
            // }


        }
    })


    // update finds first match and runs/ updateMany hits all targets
    const updateEmail = await prisma.user.update({
        where: {
            email: "sally@test3.com"
        },
        data: {
            email: "sally@test.com"
        }
    })
    console.log(updateEmail)


    // const users = await prisma.post.findMany({
    //     where: {
    //         author: {
    //             is: {
    //                 age: 26
    //             }
    //         }
    //     }
    // })
    // console.log(users)
    console.log(user)


    const deleteUser = await prisma.user.delete({
        where: {
            email: "kyle@test.com"
        }
    })
    console.log(deleteUser)








}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })