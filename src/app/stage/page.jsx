"use client";
import React from "react";
import { GameDescBox } from "@/components/gameDesc/GameDescBox";

export default function StagePage() {
  return (
    <>
      <GameDescBox
        descHeader={"스테이지"}
        desc={"설명설명설명"}
        startButtonDesc={""}
        buttonDesc={["싸운다", "도망간다", "멍때린다", "아몰랑"]}
      />
    </>
  );
}
