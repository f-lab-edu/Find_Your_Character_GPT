"use client";
import React from "react";
import { ContentFont } from "../../components/contentFont/ContentFont";
import { FloatButton } from "../../components/floatButton/FloatButton";
import { TitleFont } from "../../components/titleFont/TitleFont";
import { ProgressBox } from "../../components/progressBar/ProgressBar";

export default function StagePage() {
  return (
    <>
      <div>
        <div>
          <ProgressBox />
        </div>
        <TitleFont desc={"stage1"} size="30" />
        <ContentFont
          desc={"당신은 미궁에 빠졌습니다. 당신의 선택은?"}
          size="30"
        />
      </div>
      <div>
        <FloatButton desc={"싸운다"} />
        <FloatButton desc={"도망간다"} />
        <FloatButton desc={"도망간다"} />
        <FloatButton desc={"도망간다"} />
      </div>
    </>
  );
}
