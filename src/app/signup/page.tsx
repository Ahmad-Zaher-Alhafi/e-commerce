"use client";

import { signup } from "@/app/actions/auth";
import Link from "next/link";
import { useActionState } from "react";

export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <div className="custom-paddingX flex flex-col items-center">
      <form
        action={action}
        className="flex flex-col gap-[15px] items-center justify-center bg-black rounded-[20px] p-[20px] max-w-[500px] min-w-[352px] min-h-[468px]"
      >
        <span
          className={
            "text-white font-integral font-bold text-[32px] sm:text-[40px] leading-[35px] max-w-[551px] flex-1 pb-[5px] border-b-2"
          }
        >
          Sign Up Form
        </span>

        <div className="flex flex-col gap-[5px] items-start font-satoshi font-medium w-full">
          <label htmlFor="name" className="text-white font-bold">
            Name:
          </label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            className={
              "w-full py-[10px] pl-5 pr-4 rounded-full bg-white font-satoshi text-[14px]"
            }
          ></input>

          {state?.errors?.name && (
            <p className="text-red-500">{state.errors.name}</p>
          )}
        </div>

        <div className="flex flex-col gap-[5px] items-start font-satoshi font-medium w-full">
          <label htmlFor="email" className="text-white font-bold">
            Email:
          </label>

          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your email"
            className={
              "w-full py-[10px] pl-5 pr-4 rounded-full bg-white font-satoshi text-[14px]"
            }
          ></input>

          {state?.errors?.email && (
            <p className="text-red-500">{state.errors.email}</p>
          )}
        </div>

        <div className="flex flex-col gap-[5px] items-start font-satoshi font-medium w-full">
          <label htmlFor="password" className="text-white font-bold">
            Password:
          </label>

          <input
            type="password"
            id="password"
            name="password"
            placeholder="New password"
            className={
              "w-full py-[10px] pl-5 pr-4 rounded-full bg-white font-satoshi text-[14px]"
            }
          ></input>

          {state?.errors?.password && (
            <div className="text-red-500">
              <p>Password must:</p>
              <ul>
                {state.errors.password.map((error) => (
                  <li key={error}>- {error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button
          disabled={pending}
          type="submit"
          className={
            "font-satoshi font-bold bg-white hover:bg-black hover:text-white border-2 box-border rounded-full w-full py-[10px] mt-[30px]"
          }
        >
          {pending ? "Signing up..." : "Sign Up"}
        </button>

        <div className="font-satoshi text-white">
          Already have an account?{" "}
          <Link href="/login" className="underline underline-offset-4">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
}
