"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail, Lock, Eye, EyeOff } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { LoginInput, loginSchema } from "@/lib/schemas/auth.schema";

export default function page() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: LoginInput) {
    console.log(data);
    //add data
    toast.success("Welcome back!", {
      description: <p>You have been successfully authenticated.</p>,
      position: "top-center",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
    reset();
  }

  return (
    <div className="font-gist flex h-screen w-screen flex-col items-center justify-center">
      <Card className="min-w-100">
        <CardHeader className="space-y-2 text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 p-3">
            <Lock className="h-6 w-6 text-slate-900" />
          </div>
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription className="text-slate-500">
            Enter your email and password to access your account.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            id="login"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className={errors.email ? "text-red-500" : ""}
                    htmlFor="login-email"
                  >
                    Email
                  </FieldLabel>
                  <div className="relative">
                    <Mail className="absolute top-3 left-3 h-4 w-4 text-slate-400" />
                    <Input
                      {...field}
                      id="login-email"
                      type="email"
                      aria-invalid={fieldState.invalid}
                      placeholder="m@example.com"
                      autoComplete="off"
                      className="pl-9"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  {fieldState.invalid && (
                    <FieldError
                      className="text-red-500"
                      errors={[fieldState.error]}
                    />
                  )}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <div className="flex items-center justify-between">
                    <FieldLabel
                      htmlFor="password"
                      className={errors.password ? "text-red-500" : ""}
                    >
                      Password
                    </FieldLabel>
                    <Button asChild variant="link" className="-m-2">
                      <Link href=""> Forgot password?</Link>
                    </Button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute top-3 left-3 h-4 w-4 text-slate-400" />
                    <Input
                      {...field}
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      className="pr-10 pl-9"
                      placeholder="••••••••••"
                      disabled={isSubmitting}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-3 right-3 h-4 w-4 text-slate-400 transition-colors hover:text-slate-600 focus:outline-none"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {fieldState.invalid && (
                    <FieldError
                      className="text-red-500"
                      errors={[fieldState.error]}
                    />
                  )}
                </Field>
              )}
            />
            <Button
              type="submit"
              className="mt-2 h-11 w-full rounded-lg bg-slate-950 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 text-center text-sm text-slate-500">
          <div>
            Don't have an account?
            <Button asChild className="-m-2" variant="link">
              <Link href="/register">Sign up</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
      <p className="mt-5 w-94 text-center text-sm text-slate-500">
        By clicking continue, you agree to our
        <Button className="-m-2" variant="link">
          Terms of Service
        </Button>
        and
        <Button className="-m-2" variant="link">
          Privacy Policy
        </Button>
        .
      </p>
    </div>
  );
}
