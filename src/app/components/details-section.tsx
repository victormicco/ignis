import Image from "next/image";
import fire from "../../../public/fire-flame.gif";

export default function Details() {
  return (
    <section id="details" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Detalhes
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Eleve o nível de como você aprende.
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ignis é uma comunidade de aprendizado moderna e minimalista,
              levando como base a importância de compartilhar conhecimento e
              experiências com outras pessoas.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image src={fire} alt="Features" />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">O foco é no aprendizado</h3>
                  <p className="text-muted-foreground">
                    Todos têm algo a ensinar e aprender, independente do seu
                    nível de experiência, o importante é colaborar :)
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Servidor no Discord</h3>
                  <p className="text-muted-foreground">
                    Participe de discussões e tire dúvidas com outros membros da
                    comunidade.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Networking</h3>
                  <p className="text-muted-foreground">
                    Conheça pessoas e faça networking com profissionais de
                    diversas áreas. Isso é essencial para o seu crescimento.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
