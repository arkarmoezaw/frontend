"use client";

import { Control, FieldValues, Path, useController } from "react-hook-form";
import { LucideIcon } from "lucide-react";

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  icon?: LucideIcon;
  type?: string;
};

const FormInput = <T extends FieldValues>({
  name,
  control,
  label,
  icon: Icon,
  type = "text",
}: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div>
      <label className="text-sm">{label}</label>

      <div className="relative mt-1">
        {Icon && (
          <Icon className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
        )}

        <input
          {...field}
          type={type}
          className={`w-full rounded-lg border py-2 pl-10 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
      </div>

      {error && <p className="text-xs text-red-500">{error.message}</p>}
    </div>
  );
};

export default FormInput;
