"use client";
import React from "react";
import { Logo } from "@/components/Logo/Logo";
import { GameDescBox } from "@/components/GameDesc/GameDescBox";

export default function StagePage({ params }) {
  const stageNumber = params.slug;
  return (
    <>
      <div>
        <Logo />
        <GameDescBox descHeader={`스테이지${stageNumber}`} desc={"설명설명설명"} startButtonDesc={""} buttonDesc={["싸운다", "도망간다", "멍때린다", "아몰랑"]} stageNumber={stageNumber} />
      </div>
    </>
  );
}
