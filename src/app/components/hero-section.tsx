"use client";

import { Button } from "@/components/ui/button";
import Globe from "../../components/magicui/globe";
import { useToast } from "../../components/ui/use-toast";

export default function HeroSection() {
  const { toast } = useToast();
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32" id="home">
      <div className="container space-y-10 xl:space-y-16 flex flex-col justify-center items-center">
        <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Ensine, aprenda e compartilhe com o Ignis
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Uma comunidade de conhecimento lateralizado, onde você pode
              ensinar, aprender e compartilhar conhecimento com outras pessoas.
            </p>
            <div className="space-x-4">
              <Button
                onClick={() =>
                  toast({
                    title: "Por que tanta pressa? 🏃🏽‍➡️",
                    description:
                      "Navegue com calma no site, veja o que oferecemos e se gostar, faça parte da nossa comunidade!",
                  })
                }
              >
                Vamos lá!
              </Button>
            </div>
          </div>
        </div>
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  bg-background  pb-40 md:pb-64 border shadow-xl">
          <Globe className="" />
        </div>
      </div>
    </section>
  );
}
