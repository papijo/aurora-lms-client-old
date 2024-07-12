"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  //   SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { CreateNewUniversitySchema } from "@/schemas";
import {
  GetRequest,
  PostRequest,
  PutRequest,
} from "@/utils/helpers/request-methods";
import { useAppSelector } from "@/utils/redux";
import { States } from "@/utils/types/states";
import { UniversityTypes } from "@/utils/types/university";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface UniversityDetailProps {
  id: number;
  name: string;
  state: string;
  type: string;
}

export function EditUniversity({
  id,
  name,
  state,
  type,
}: UniversityDetailProps) {
  const accesstoken = useAppSelector((state) => state.auth.accesstoken);
  const { toast } = useToast();

  // Form Element
  const form = useForm<z.infer<typeof CreateNewUniversitySchema>>({
    resolver: zodResolver(CreateNewUniversitySchema),
    defaultValues: {
      name: name,
      state: state,
      type: type,
    },
  });

  const onSubmit = async (
    values: z.infer<typeof CreateNewUniversitySchema>
  ) => {
    // Change to put request
    console.log("Values: ", values);
    PutRequest(`/university/edit/${id}`, accesstoken, values)
      .then((res: any) => {
        toast({
          title: "Success",
          description: res.message,
          variant: "default",
        });

        console.log(res);

        window.location.reload();
      })
      .catch((error: any) => {
        toast({
          title: "Error",
          description: error?.response?.data?.message,
          variant: "destructive",
        });
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Edit University</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit {name} details </DialogTitle>
          {/* <DialogDescription>Add New University to DB</DialogDescription> */}
        </DialogHeader>

        <Form {...form}>
          <div className="space-y-4">
            <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="University of Awesome" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              {/* Type */}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>University Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select University Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {Object.entries(UniversityTypes).map(
                              ([key, value]) => {
                                return (
                                  <SelectItem key={key} value={value}>
                                    {value}
                                  </SelectItem>
                                );
                              }
                            )}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              {/* State */}
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {Object.entries(States).map(([key, value]) => {
                              return (
                                <SelectItem key={key} value={value}>
                                  {value}
                                </SelectItem>
                              );
                            })}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              <Button className="w-full" type="submit">
                Save
              </Button>
            </form>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
