import { LoginButton } from "@/components/auth/login-button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 to-slate-300">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-gray drop-shadow-md")}>
          Auth
        </h1>
        <p className="text-slate text-lg">Landing Page</p>
        <div>
          <LoginButton mode="modal">Sign In</LoginButton>
        </div>
      </div>
    </main>
  );
}

// Use Root Page from LMS to Build Here
