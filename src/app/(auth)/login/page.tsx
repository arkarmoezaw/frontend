"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, loginSchema } from "@/lib/schemas/auth.schema";

import FormInput from "@/components/forms/FormInput";
import FormPassword from "@/components/forms/FormPassword";

import { Mail } from "lucide-react";

const Login = () => {
  const { control, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    console.log("Login:", data);

    // await fetch("/api/auth/login", {...})
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-4 rounded-xl bg-white p-6 shadow"
      >
        <h2 className="text-center text-xl font-bold">Login</h2>

        <FormInput<LoginSchema>
          name="email"
          label="Email"
          control={control}
          icon={Mail}
        />

        <FormPassword<LoginSchema>
          name="password"
          label="Password"
          control={control}
        />

        <button className="w-full rounded-lg bg-indigo-600 py-2 text-white">
          Login
        </button>

        <p className="text-center text-sm">
          No account?{" "}
          <a href="/register" className="text-indigo-600">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
