"server-only";
"use server";
import { prismaInstance } from "./prismaClientSingleton";

async function addUser(name: string, email: string, password: string) {
  try {
    return await prismaInstance.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
  } catch (error) {
    console.error("Failed to add user to DB: ", error);
  }
}

async function getUserByEmail(email: string) {
  try {
    return await prismaInstance.user.findUnique({
      where: {
        email: email,
      },
    });
  } catch (error) {
    console.error("Failed to add user to DB: ", error);
  }
}

export { addUser, getUserByEmail };
