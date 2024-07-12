"use client";
import { CardWrapper } from "./card-wrapper";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
// import { FormError } from "../form-error";
// import { FormSuccess } from "../form-success";
import Link from "next/link";
import { MouseEvent, useState, useTransition } from "react";
import { Input } from "../ui/input";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";
import { PublicRequest } from "@/utils/helpers/axios-connectors";
import { useAppDispatch } from "@/utils/redux";
import { setUser } from "@/utils/redux/userSlice";
import {
  setAccessToken,
  setAuthState,
  setRefreshToken,
} from "@/utils/redux/authSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

export const LoginForm = () => {
  // Local State Management
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { toast } = useToast();

  // Router
  const router = useRouter();

  // toggle password visibility function, changes the input type from password to text

  // Form Element
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // State Management
  const dispatch = useAppDispatch();

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    PublicRequest.post("/auth/login", values)
      .then((res) => {
        if (res.status === 200) {
          toast({ title: "Login Success" });
          dispatch(setUser(res.data.data.user));
          dispatch(setAccessToken(res.data.data.accessToken));
          dispatch(setRefreshToken(res.data.data.refreshToken));
          dispatch(setAuthState(true));
        }
        // Add Redirect
        router.push("/dashboard");
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: error?.response?.data?.message,
          variant: "destructive",
        });
      });
  };

  const ChangeType = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setShowPassword(!showPassword);
  };

  return (
    <CardWrapper
      bigLabel="MSTC"
      headerLabel="Welcome Back"
      backButtonLabel="Return to the Homepage"
      backButtonHref="/"
    >
      <>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="john.doe@email.com"
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="flex">
                        <Input
                          {...field}
                          placeholder="******"
                          type={showPassword ? "text" : "password"}
                          disabled={loading}
                        />
                        <Button
                          className="ml-3"
                          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                            ChangeType(e)
                          }
                        >
                          {showPassword ? (
                            <HiOutlineEyeOff />
                          ) : (
                            <HiOutlineEye />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <Button
                      size="sm"
                      variant="link"
                      asChild
                      className="px-0 font-normal w-full"
                    >
                      <Link href="/auth/reset">Forget Password?</Link>
                    </Button>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <Button className="w-full" type="submit">
                Login
              </Button>
            </div>
          </form>
        </Form>
      </>
    </CardWrapper>
  );
};
