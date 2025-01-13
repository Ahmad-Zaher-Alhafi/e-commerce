import {
  SignupFormSchema,
  FormState,
  LoginFormSchema,
} from "@/app/lib/definitions";
import { createSession, deleteSession, isSessionValid } from "../lib/session";
import { redirect } from "next/navigation";
import { addUser, getUserByEmail } from "../../../DB/userController";
import bcrypt from "bcryptjs";

export async function signup(state: FormState, formData: FormData) {
  const validatedFields = await SignupFormSchema.safeParseAsync({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10);
  const user = await addUser(
    validatedFields.data.name,
    validatedFields.data.email,
    hashedPassword
  );

  if (!user) {
    return {
      message: "An error occurred while creating your account.",
    };
  }

  await createSession(String(user.id));

  redirect("/");
}

export async function login(state: FormState, formData: FormData) {
  const validatedFields = await LoginFormSchema.safeParseAsync({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const user = await getUserByEmail(validatedFields.data.email);

  if (!user) {
    return {
      message: "An error occurred while logging into your account.",
    };
  }

  const isValid = await bcrypt.compare(
    validatedFields.data.password,
    user.password
  );

  if (isValid) {
    await createSession(String(user.id));
    redirect("/");
  } else {
    return {
      errors: {
        password: ["Email or password is incorrect."],
      },
    };
  }
}

export async function checkIfLoggedIn() {
  return await isSessionValid();
}

export async function logOut() {
  await deleteSession();
  redirect("/");
}
