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

import { useToast } from "@/components/ui/use-toast";
import { DeleteRequest } from "@/utils/helpers/request-methods";
import { useAppSelector } from "@/utils/redux";

interface UniversityDetailProps {
  id: number;
}

export function DeleteUniversity({ id }: UniversityDetailProps) {
  const accesstoken = useAppSelector((state) => state.auth.accesstoken);
  const { toast } = useToast();

  console.log("ID: ", id);

  const onDelete = async (id: any) => {
    DeleteRequest(`/university/del/${id}`, accesstoken)
      .then((res) => {
        toast({ title: "Success", description: res.message });

        window.location.reload();
      })
      .catch((error) => {
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
        <Button variant="ghost">Delete University</Button>
      </DialogTrigger>
      {/* <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex justify-center">
            Are you sure u want to delete this University?
          </DialogTitle>

          <div>
            <Button
              onClick={() => onDelete(id)}
              className="mt-10 w-full"
              type="submit"
            >
              Delete
            </Button>
          </div>
        </DialogHeader>
      </DialogContent> */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. Are you sure you want to permanently
            delete this university from the database?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => onDelete(id)} type="submit">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
