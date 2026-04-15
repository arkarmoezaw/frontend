"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail, Lock, User } from "lucide-react";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { RegisterFormData, registerSchema } from "@/lib/schemas/auth.schema";
import PasswordShowHiddenEye from "@/components/PasswordShowHiddenEye";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: RegisterFormData) {
    console.log(data);
    //add data
    toast.success("Welcome!", {
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
    <form id="register" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Controller
        name="fullname"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              className={errors.email ? "text-red-500" : ""}
              htmlFor="register-fullname"
            >
              Full Name
            </FieldLabel>
            <div className="relative">
              <User className="absolute top-3 left-3 h-4 w-4 text-slate-400" />
              <Input
                {...field}
                id="register-fullname"
                type="text"
                aria-invalid={fieldState.invalid}
                placeholder="John Cena"
                className="pl-9"
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
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              className={errors.email ? "text-red-500" : ""}
              htmlFor="register-email"
            >
              Email
            </FieldLabel>
            <div className="relative">
              <Mail className="absolute top-3 left-3 h-4 w-4 text-slate-400" />
              <Input
                {...field}
                id="register-email"
                type="email"
                aria-invalid={fieldState.invalid}
                placeholder="m@example.com"
                className="pl-9"
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
            <FieldLabel
              htmlFor="register-password"
              className={errors.password ? "text-red-500" : ""}
            >
              Password
            </FieldLabel>

            <div className="relative">
              <Lock className="absolute top-3 left-3 h-4 w-4 text-slate-400" />
              <Input
                {...field}
                id="register-password"
                type={showPassword ? "text" : "password"}
                aria-invalid={fieldState.invalid}
                autoComplete="off"
                className="pr-10 pl-9"
                placeholder="••••••••••"
                disabled={isSubmitting}
              />
              <PasswordShowHiddenEye
                showPassword={showPassword}
                setShowPassword={setShowPassword}
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
        name="confirmPassword"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor="confirm-password"
              className={errors.confirmPassword ? "text-red-500" : ""}
            >
              Confirm Password
            </FieldLabel>

            <div className="relative">
              <Lock className="absolute top-3 left-3 h-4 w-4 text-slate-400" />
              <Input
                {...field}
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                aria-invalid={fieldState.invalid}
                autoComplete="off"
                className="pr-10 pl-9"
                placeholder="••••••••••"
                disabled={isSubmitting}
              />
              <PasswordShowHiddenEye
                showPassword={showConfirmPassword}
                setShowPassword={setShowConfirmPassword}
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

      <Button
        type="submit"
        className="mt-2 h-11 w-full rounded-lg bg-slate-950 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : (
          "Create Account"
        )}
      </Button>
    </form>
  );
}
