import { PrismaClient } from "@prisma/client";

class PrismaClientSingleton {
  private static instance: PrismaClient;

  private constructor() {}

  public static getInstance(): PrismaClient {
    if (!PrismaClientSingleton.instance) {
      PrismaClientSingleton.instance = new PrismaClient({ log: ["error"] });
    }
    return PrismaClientSingleton.instance;
  }
}

process.on("exit", async () => {
  await prismaInstance.$disconnect();
});

export const prismaInstance = PrismaClientSingleton.getInstance();
