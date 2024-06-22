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
import { PostRequest } from "@/utils/helpers/request-methods";
import { useAppSelector } from "@/utils/redux";
import { States } from "@/utils/types/states";
import { UniversityTypes } from "@/utils/types/university";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function CreateUniversity() {
  const accesstoken = useAppSelector((state) => state.auth.accesstoken);
  const { toast } = useToast();
  // Form Element
  const form = useForm<z.infer<typeof CreateNewUniversitySchema>>({
    resolver: zodResolver(CreateNewUniversitySchema),
    defaultValues: {
      name: "",
      state: "",
      type: "",
    },
  });

  const onSubmit = async (
    values: z.infer<typeof CreateNewUniversitySchema>
  ) => {
    PostRequest("/university/create", accesstoken, values)
      .then((res) => {
        toast({
          title: "Success",
          description: res.message,
          variant: "default",
        });

        window.location.reload();
      })
      .catch((error) => {
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
        <Button>Create University</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New University</DialogTitle>
          <DialogDescription>Add New University to DB</DialogDescription>
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
                Create
              </Button>
            </form>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
