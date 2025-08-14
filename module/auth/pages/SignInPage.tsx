"use client";

import z from "zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { navRoutes } from "@/lib/navRoutes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { GoogleLogo } from "@/public/icons/google-logo";
import { SignInValidationSchema } from "../schema/auth.schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";


const SignInPage = () => {
  const form = useForm<z.infer<typeof SignInValidationSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInValidationSchema),
  });

  const onSubmit = (data: z.infer<typeof SignInValidationSchema>) => {
    console.log(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="max-w-sm w-full flex flex-col items-center border rounded-lg p-6 shadow-sm">
        <p className="mt-4 text-xl font-bold tracking-tight">
          Login to LMS Platform
        </p>

        <Button className="mt-8 w-full gap-3">
          <GoogleLogo />
          Continue with Google
        </Button>

        <div className="my-7 w-full flex items-center justify-center overflow-hidden">
          <Separator />
          <span className="text-sm px-2">OR</span>
          <Separator />
        </div>

        <Form {...form}>
          <form
            className="w-full space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-4 w-full">
              Continue with Email
            </Button>
          </form>
        </Form>

        <div className="mt-5 space-y-5">
          <Link
            href="#"
            className="text-sm block underline text-muted-foreground text-center"
          >
            Forgot your password?
          </Link>
          <p className="text-sm text-center">
            Don&apos;t have an account?
            <Link href={navRoutes?.auth?.signUp} className="ml-1 underline text-muted-foreground">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
