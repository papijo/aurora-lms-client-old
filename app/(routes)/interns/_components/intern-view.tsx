import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface InternDetails {
  name: string;
  phonenumber: string;
  email: string;
  university: string;
  lab: string;
  startDate: string;
  endDate: string;
  status: string;
}

export function ViewIntern({
  name,
  phonenumber,
  email,
  university,
  lab,
  startDate,
  endDate,
  status,
}: InternDetails) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">View Intern</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Card className="">
          <CardHeader>
            <CardTitle className="justify-center">
              View all details for <b>{name}</b>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1 mb-3">
              <p className="text-sm font-medium leading-none">Name</p>
              <p className="text-sm text-muted-foreground">{name}</p>
            </div>
            <div className="space-y-1 mb-3">
              <p className="text-sm font-medium leading-none">Phone Number</p>
              <p className="text-sm text-muted-foreground">{phonenumber}</p>
            </div>
            <div className="space-y-1 mb-3">
              <p className="text-sm font-medium leading-none">Email</p>
              <p className="text-sm text-muted-foreground">{email}</p>
            </div>
            <div className="space-y-1 mb-3">
              <p className="text-sm font-medium leading-none">University</p>
              <p className="text-sm text-muted-foreground">{university}</p>
            </div>
            <div className="space-y-1 mb-3">
              <p className="text-sm font-medium leading-none">Laboratory</p>
              <p className="text-sm text-muted-foreground">{lab}</p>
            </div>
            <div className="space-y-1 mb-3">
              <p className="text-sm font-medium leading-none">Start Date</p>
              <p className="text-sm text-muted-foreground">{startDate}</p>
            </div>
            <div className="space-y-1 mb-3">
              <p className="text-sm font-medium leading-none">End Date</p>
              <p className="text-sm text-muted-foreground">{endDate}</p>
            </div>
            <div className="space-y-1 mb-3">
              <p className="text-sm font-medium leading-none">Status</p>
              <p className="text-sm text-muted-foreground">{status}</p>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
