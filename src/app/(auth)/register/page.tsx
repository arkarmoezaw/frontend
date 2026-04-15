import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { User } from "lucide-react";
import RegisterForm from "./RegisterForm";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div className="font-gist flex h-screen w-screen flex-col items-center justify-center">
      <Card className="min-w-100">
        <CardHeader className="space-y-2 text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 p-3">
            <User className="h-6 w-6 text-slate-900" />
          </div>
          <CardTitle className="text-2xl font-bold">
            Create an account
          </CardTitle>
          <CardDescription className="text-slate-500">
            Enter your details below to create your account.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 text-center text-sm text-slate-500">
          <div>
            Already have an account?
            <Button asChild className="-m-2" variant="link">
              <Link href="/login">Sign in</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Footer />
    </div>
  );
}
