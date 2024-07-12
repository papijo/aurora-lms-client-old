"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface UniversityDetails {
  name: string;
  state: string;
  type: string;
  internCount: number;
}

export function ViewUniversity({
  name,
  state,
  type,
  internCount,
}: UniversityDetails) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">View University</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        {/* Card Content */}
        <Card className="">
          <CardHeader>
            <CardTitle className="justify-center">
              View University Details
            </CardTitle>
            <CardDescription>
              View all details for <b>{name}</b>.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-1 mb-3">
              <p className="text-sm font-medium leading-none">Name</p>
              <p className="text-sm text-muted-foreground">{name}</p>
            </div>
            <div className="space-y-1 mb-3">
              <p className="text-sm font-medium leading-none">Intern Count</p>
              <p className="text-sm text-muted-foreground">{internCount}</p>
            </div>
            <div className="space-y-1 mb-3">
              <p className="text-sm font-medium leading-none">Type</p>
              <p className="text-sm text-muted-foreground">{type}</p>
            </div>
            <div className="space-y-1 mb-3">
              <p className="text-sm font-medium leading-none">State</p>
              <p className="text-sm text-muted-foreground">{state}</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
