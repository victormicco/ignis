import { Flame, MenuIcon } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
      <Link href="#" className="flex items-center" prefetch={false}>
        <Flame className="h-6 w-6" />
        <span className="sr-only">Ignis</span>
      </Link>

      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        <Button variant="outline">
          <Link href="https://discord.com/invite/MGcTqFknmq" prefetch={false}>
            Entrar na comunidade!
          </Link>
        </Button>
        <Link
          href="#home"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          Início
        </Link>
        <Link
          href="#details"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          Detalhes
        </Link>
        <Link
          href="#features"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          Features
        </Link>
        <ModeToggle />
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Menu de navegação</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[80vw] md:hidden">
          <div className="flex flex-col items-start gap-4 p-6">
            <Link href="#" className="flex items-center" prefetch={false}>
              <Flame className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="grid w-full gap-2">
              <Link
                href="#home"
                className="flex items-center gap-2 rounded-md py-2 px-4 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                prefetch={false}
              >
                Início
              </Link>
              <Link
                href="#details"
                className="flex items-center gap-2 rounded-md py-2 px-4 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                prefetch={false}
              >
                Detalhes
              </Link>
              <Link
                href="#features"
                className="flex items-center gap-2 rounded-md py-2 px-4 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                prefetch={false}
              >
                Features
              </Link>
              <hr />
              <div className="flex gap-x-4">
                <ModeToggle />
                <Button variant="outline">
                  <Link
                    href="https://discord.com/invite/MGcTqFknmq"
                    prefetch={false}
                  >
                    Entrar na comunidade!
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
