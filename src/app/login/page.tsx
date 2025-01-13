"use client";

import { login } from "@/app/actions/auth";
import Link from "next/link";
import { useActionState } from "react";

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <div className="custom-paddingX flex flex-col items-center">
      <form
        action={action}
        className="flex flex-col flex-1 gap-[15px] items-center bg-black rounded-[20px] p-[20px] max-w-[500px] min-w-[352px] min-h-[468px] h-full"
      >
        <div className="flex flex-col flex-1 gap-[15px] w-full">
          <span
            className={
              "text-white font-integral font-bold text-[32px] sm:text-[40px] leading-[35px] max-w-[551px] pb-[5px] border-b-2 text-center"
            }
          >
            Login Form
          </span>
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
              placeholder="Your password"
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
        </div>

        <div className="flex flex-col gap-[15px] w-full items-center justify-self-end">
          <button
            disabled={pending}
            type="submit"
            className={
              "font-satoshi font-bold bg-white hover:bg-black hover:text-white border-2 box-border rounded-full w-full py-[10px]"
            }
          >
            {pending ? "Logging in..." : "Login"}
          </button>

          <div className="font-satoshi text-white">
            Or create a new account:{" "}
            <Link href="/signup" className="underline underline-offset-4">
              Signup
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
