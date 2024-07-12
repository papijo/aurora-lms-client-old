import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { CreateNewInternSchema, EditNewInternSchema } from "@/schemas";
import { useAppSelector } from "@/utils/redux";
import { Lab, University } from "@/utils/types/university";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { PopoverContent } from "@radix-ui/react-popover";
import { Calendar } from "@/components/ui/calendar";
import {
  GetRequest,
  PostRequest,
  PutRequest,
} from "@/utils/helpers/request-methods";
import { useEffect, useState } from "react";

interface InternDetailProps {
  name: string;
  universityId: number;
  uniName: string;
  email: string;
  phonenumber: string;
  status: string;
  lab: string;
  startDate: Date;
  endDate: Date;
  id: number;
}

export function EditIntern({
  name,
  universityId,
  uniName,
  email,
  phonenumber,
  lab,
  startDate,
  endDate,
  status,
  id,
}: InternDetailProps) {
  const accesstoken = useAppSelector((state) => state.auth.accesstoken);
  const { toast } = useToast();
  const [universities, setUniversities] = useState<any[]>([]);
  const [uni, setUniversity] = useState<University | null>(null);

  useEffect(() => {
    GetRequest(`/university/find/${universityId}`, accesstoken).then((data) => {
      setUniversity(data.data);
    });
  }, [accesstoken, id, universityId]);

  useEffect(() => {
    GetRequest("/university/all/unpaginated", accesstoken)
      .then((res) => {
        setUniversities(res.data.universities);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [accesstoken]);

  // Form Element
  const form = useForm<z.infer<typeof EditNewInternSchema>>({
    resolver: zodResolver(EditNewInternSchema),
    defaultValues: {
      name,
      universityId: universityId.toString(),
      university: uniName,
      email: email,
      phonenumber,
      lab,
      startDate,
      endDate,
      status,
    },
  });

  console.log("University Name: ", uniName);

  //   Form Submit
  const onSubmit = async (values: z.infer<typeof EditNewInternSchema>) => {
    const startDate = JSON.stringify(values.startDate, null, 2);
    const cleanStartDateString = startDate.slice(1, -1);

    const endDate = JSON.stringify(values.endDate, null, 2);
    const cleanEndDateString = endDate.slice(1, -1);

    const data = {
      name: values.name,
      phonenumber: values.phonenumber,
      email: values.email,
      universityId: values.universityId,
      lab: values.lab,
      status: values.status,
      startDate: cleanStartDateString,
      endDate: cleanEndDateString,
    };

    PutRequest(`/intern/edit/${id}`, accesstoken, data)
      .then((res) => {
        console.log(res);
        toast({ title: "Success", description: res.message });

        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Error",
          description: error.response.data.message,
          variant: "destructive",
        });
      });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button> Edit Intern</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Edit {name} details </DialogTitle>
        {/* <DialogDescription>Add new Intern to the DB</DialogDescription> */}

        <Form {...form}>
          <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Ebhota Jonathan" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              {/* Phone Number */}
              <FormField
                control={form.control}
                name="phonenumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="09093802945" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="email.email@email.com" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              {/* University */}
              <FormField
                control={form.control}
                name="university"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>University</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="University" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {universities.map((university) => {
                          return (
                            <SelectItem
                              key={university.id}
                              value={university.id.toString()}
                            >
                              {university.name}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              {/* Lab */}
              <FormField
                control={form.control}
                name="lab"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Laboratory</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Laboratory" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.entries(Lab).map(([key, value]) => {
                          return (
                            <SelectItem key={key} value={value}>
                              {value}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              {/* Start Date */}
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Start Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-full p-0 bg-white"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* EndDate */}
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>End Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="p-0 z-50 bg-white"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
