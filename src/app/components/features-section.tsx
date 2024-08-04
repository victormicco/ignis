import coding from "../../../public/coding.gif";
import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              O que a Ignis oferece?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nossa comunidade oferece diversos recursos e funcionalidades para
              você evoluir e contribuir ativamente resultando em um ambiente de
              aprendizado saudável e colaborativo.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Projetos Reais</h3>
                  <p className="text-muted-foreground">
                    Colabore em projetos reais com outros membros da comunidade
                    e desenvolva suas habilidades na prática.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Call de estudos</h3>
                  <p className="text-muted-foreground">
                    Participe de calls de estudos semanais com outros membros da
                    comunidade e aprenda juntos, grave suas calls com nosso bot
                    e assista caso tenha esquecido algo.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Trilhas de aprendizado.</h3>
                  <p className="text-muted-foreground">
                    Fornecemos trilhas e caminhos sugeridos para cada área de
                    conhecimento, você não precisa se sentir perdido novamente.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <Image
            src={coding}
            width="550"
            height="310"
            alt="Components"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}
