"use client";
import { GameDescBox } from "@/components/GameDesc/GameDescBox";
import { Logo } from "@/components/Logo/Logo";
import { startPage } from "../../constant/constants";

export default function Home() {
  return (
    <>
      <Logo />
      <GameDescBox descHeader={startPage.startHeader} desc={startPage.startDesc} startButtonDesc={startPage.startButton} buttonDesc={""} />
    </>
  );
}
