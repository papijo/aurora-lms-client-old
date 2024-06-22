"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreateNewUserSchema } from "@/schemas";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GenerateRandomPassword } from "@/utils/helpers/generators";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heading } from "@/components/heading";
import { UserRoles } from "@/utils/types/user";
import toast from "react-hot-toast";

const CreateNewUser = () => {
  // Local State
  const [randomPassword, setPassword] = useState("");
  const [error, setError] = useState("");

  // Validation Schema
  const form = useForm<z.infer<typeof CreateNewUserSchema>>({
    resolver: zodResolver(CreateNewUserSchema),
    defaultValues: {
      name: "",
      password: "",
      role: "",
    },
  });

  function onSubmit(values: z.infer<typeof CreateNewUserSchema>) {
    try {
      console.log(values);
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  const GeneratePassword = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const password = GenerateRandomPassword();

    setPassword(password);
    // Update form state with generated password (using form.setValue)
    form.setValue("password", password);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full flex flex-col items-center justify-center">
        <Heading title="Create New User" description=" " />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-1/2"
          >
            {/* Fullname */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fullname</FormLabel>
                  <FormControl>
                    <Input placeholder="Ebhota Johnson" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="flex">
                      <Input {...field} className="mr-5" />
                      <Button onClick={(e) => GeneratePassword(e)}>
                        Generate Password
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Role */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {UserRoles.map((UserRole) => {
                          return (
                            <SelectItem key={UserRole.id} value={UserRole.role}>
                              {UserRole.role}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateNewUser;
