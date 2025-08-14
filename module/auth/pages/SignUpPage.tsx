"use client";

import { z } from "zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { navRoutes } from "@/lib/navRoutes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { GoogleLogo } from "@/public/icons/google-logo";
import { SignUpValidationSchema } from "../schema/auth.schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";


const SignUpPage = () => {
  const form = useForm<z.infer<typeof SignUpValidationSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignUpValidationSchema),
  });

  const onSubmit = (data: z.infer<typeof SignUpValidationSchema>) => {
    console.log(data);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="max-w-sm w-full flex flex-col items-center border rounded-lg p-6 shadow-sm">
        <p className="mt-4 text-xl font-bold tracking-tight">
          Sign up for LMS Platform
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

        <p className="mt-5 text-sm text-center">
          Already have an account?
          <Link href={navRoutes?.auth?.signIn} className="ml-1 underline text-muted-foreground">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
