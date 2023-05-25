"use client";
import { GameDescBox } from "@/components/gameDesc/GameDescBox";
import { stageNumber } from "../../constant/constants";

export default function Home() {
  return (
    <>
      <GameDescBox descHeader={stageNumber[0]} desc={"설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명"} startButtonDesc={"Start"} buttonDesc={""} />
    </>
  );
}
