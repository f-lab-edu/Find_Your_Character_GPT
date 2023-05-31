"use client";
import React from "react";
import { Logo } from "@/components/Logo/Logo";
import { GameDescBox } from "@/components/GameDesc/GameDescBox";
import { buttonDescription } from "../../../../constant/constants";

export default function StagePage({ params }) {
  const stageNumber = params.slug;

  return (
    <>
      <div>
        <GameDescBox descHeader={`스테이지${stageNumber}`} desc={"설명설명설명"} startButtonDesc={""} buttonDesc={buttonDescription[+stageNumber - 1]} stageNumber={stageNumber} />
      </div>
    </>
  );
}
