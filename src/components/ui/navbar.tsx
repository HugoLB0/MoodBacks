import Link from "next/link";
import { Home, Plus, Settings } from "lucide-react";


export default function Navbar() {
  return (
    <nav className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <div className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/dashboard"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Home className="h-4 w-4 transition-all group-hover:scale-110" />
        </Link>

        <Link
          href="/orders"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
        >
          <Plus className="h-5 w-5" />
        </Link>
      </div>
      <div className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/settings"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
        >
          <Settings className="h-5 w-5" />
        </Link>
      </div>
    </nav>
  );
}
