import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
import { faker } from "@faker-js/faker";

export const seed = async () => {
  // create 100 users
  const userIds = [] as string[];
  for (let i = 0; i < 100; i++) {
    const userId = faker.string.uuid();
    userIds.push(userId);
    await db.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        image: faker.image.avatar(),
        emailVerified: faker.date.past(),
        id: userId,
      },
    });
  }

  // create 1000 events
  const eventIds = [] as number[];
  for (let i = 0; i < 1000; i++) {
    const eventId = i + 1;
    eventIds.push(eventId);
    const randomUserId = userIds[Math.floor(Math.random() * userIds.length)];
    await db.event.create({
      data: {
        name: faker.lorem.words(3),
        description: faker.lorem.paragraph(),
        starts_at: faker.date.future(),
        location: faker.location.streetAddress(),
        price: faker.number.float({ min: 10, max: 100 }),
        id: eventId,
        user_id: randomUserId,
      },
    });
  }

  // create 2000 registrations
  const howHeards = ["friend", "colleague", "google", "facebook"];
  for (let i = 0; i < 2000; i++) {
    const randomEventId = eventIds[Math.floor(Math.random() * eventIds.length)];
    const randomUserId = userIds[Math.floor(Math.random() * userIds.length)];
    const randomHowHeard =
      howHeards[Math.floor(Math.random() * howHeards.length)];
    await db.registration.upsert({
      create: {
        event_id: randomEventId,
        user_id: randomUserId,
        how_heard: randomHowHeard,
      },
      update: {},
      where: {
        user_id_event_id: {
          user_id: randomUserId,
          event_id: randomEventId,
        },
      },
    });
  }

  // create 15 categories
  const categoryIds = [] as string[];
  for (let i = 0; i < 15; i++) {
    const categoryId = faker.string.uuid();
    categoryIds.push(categoryId);
    await db.category.create({
      data: {
        name: faker.lorem.words(2),
        id: categoryId,
      },
    });
  }

  // go through each event and assign from 1 to 3 categories
  for (let i = 0; i < eventIds.length; i++) {
    const eventId = eventIds[i];
    const randomCategoryIds = [] as string[];
    for (let j = 0; j < Math.floor(Math.random() * 3) + 1; j++) {
      const randomCategoryId =
        categoryIds[Math.floor(Math.random() * categoryIds.length)];
      randomCategoryIds.push(randomCategoryId);
      await db.categorization.upsert({
        create: {
          event_id: eventId,
          category_id: randomCategoryId,
        },
        update: {},
        where: {
          event_id_category_id: {
            event_id: eventId,
            category_id: randomCategoryId,
          },
        },
      });
    }
    // await db.event.update({
    //   where: { id: eventId },
    //   data: {
    //     Categorization: {
    //       connect: randomCategoryIds.map((id) => ({ id })),
    //     },
    //   },
    // });
  }
};

seed()
  .then(() => {
    console.log("seeded");
  })
  .catch((e) => {
    console.error(`error seeding: ${e}`);
  });
