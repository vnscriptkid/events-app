import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

// db.event.create({
//     data: {
//         name: "test",
//         description: "test",
//         price: 100,
//         startsAt: new Date(),
//     }
// })