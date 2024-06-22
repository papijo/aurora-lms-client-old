import { cn } from "@/lib/utils";

interface HeaderProps {
  biglabel: string;
  label: string;
}

export const Header = ({ label, biglabel }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold")}>{biglabel}</h1>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};
