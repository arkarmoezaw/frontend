import { Eye, EyeOff } from "lucide-react";

interface PasswordShowHiddenEyeProps {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PasswordShowHiddenEye({
  showPassword,
  setShowPassword,
}: PasswordShowHiddenEyeProps) {
  return (
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute top-3 right-3 h-4 w-4 text-slate-400 transition-colors hover:text-slate-600 focus:outline-none"
    >
      {showPassword ? (
        <EyeOff className="h-4 w-4" />
      ) : (
        <Eye className="h-4 w-4" />
      )}
    </button>
  );
}
