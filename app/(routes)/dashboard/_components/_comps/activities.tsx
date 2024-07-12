import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Activities() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Safety Training</p>
          <p className="text-sm text-muted-foreground">Unscheduled Program</p>
        </div>
        <div className="ml-auto font-medium">21/07/2024</div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Python Training</p>
          <p className="text-sm text-muted-foreground">Modular Program</p>
        </div>
        <div className="ml-auto font-medium">21/07/2024</div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Electronics I</p>
          <p className="text-sm text-muted-foreground">Modular Program</p>
        </div>
        <div className="ml-auto font-medium">21/07/2024</div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Full Mechatronics Program
          </p>
          <p className="text-sm text-muted-foreground">Modular Program</p>
        </div>
        <div className="ml-auto font-medium">21/07/2024</div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Systens Programming with C
          </p>
          <p className="text-sm text-muted-foreground">Scheduled Program</p>
        </div>
        <div className="ml-auto font-medium">21/07/2024</div>
      </div>
    </div>
  );
}
