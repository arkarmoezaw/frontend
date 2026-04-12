"use client";

import { useState } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { Eye, EyeOff, Lock } from "lucide-react";

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
};

const FormPassword = <T extends FieldValues>({
  name,
  control,
  label,
}: Props<T>) => {
  const [show, setShow] = useState(false);

  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div>
      <label className="text-sm">{label}</label>

      <div className="relative mt-1">
        <Lock className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />

        <input
          {...field}
          type={show ? "text" : "password"}
          className={`w-full rounded-lg border py-2 pr-10 pl-10 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute top-2.5 right-3"
        >
          {show ? <EyeOff /> : <Eye />}
        </button>
      </div>

      {error && <p className="text-xs text-red-500">{error.message}</p>}
    </div>
  );
};

export default FormPassword;
