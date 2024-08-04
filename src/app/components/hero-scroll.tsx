"use client";
import React from "react";

import Image from "next/image";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import discord from "../../../public/discord.png";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <Button variant="outline" className="mt-4">
              <Link
                href="https://discord.com/invite/MGcTqFknmq"
                target="__blank"
              >
                Entre na comunidade!
              </Link>
            </Button>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Evolua seu aprendizado com a <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                nossa comunidade
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={discord}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
