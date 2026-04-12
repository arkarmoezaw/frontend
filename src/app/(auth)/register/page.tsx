"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, registerSchema } from "@/lib/schemas/auth.schema";
import FormInput from "@/components/forms/FormInput";
import FormPassword from "@/components/forms/FormPassword";
import { Mail, User } from "lucide-react";

const Register = () => {
  const { control, handleSubmit } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterSchema) => {
    console.log("Register:", data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-4 rounded-xl bg-white p-6 shadow"
      >
        <h2 className="text-center text-xl font-bold">Register</h2>

        <FormInput<RegisterSchema>
          name="name"
          label="Name"
          control={control}
          icon={User}
        />

        <FormInput<RegisterSchema>
          name="email"
          label="Email"
          control={control}
          icon={Mail}
        />

        <FormPassword<RegisterSchema>
          name="password"
          label="Password"
          control={control}
        />

        <FormPassword<RegisterSchema>
          name="confirmPassword"
          label="Confirm Password"
          control={control}
        />

        <button className="w-full rounded-lg bg-indigo-600 py-2 text-white">
          Register
        </button>

        <p className="text-center text-sm">
          Already have account?{" "}
          <a href="/login" className="text-indigo-600">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
