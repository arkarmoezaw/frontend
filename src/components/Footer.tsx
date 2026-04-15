import { Button } from "./ui/button";

export default function Footer() {
  return (
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
  );
}
