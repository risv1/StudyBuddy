import Link from "next/link";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const LoginForm = () => {
    return (
        <div className="mx-auto grid w-3/5 gap-6 border-white border-2 rounded-xl pt-20 pl-5 pr-5 pb-10">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold text-white">Login</h1>
            <p className="text-balance text-muted-foreground text-white">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" className="text-white">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" placeholder="Enter password" required />
            </div>
            <Button type="submit" className="w-full bg-slate-600 hover:bg-slate-700">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm text-white">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline text-white">
              Sign up
            </Link>
          </div>
        </div>
    )
}

export default LoginForm;