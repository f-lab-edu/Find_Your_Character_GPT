"use client";
import React from "react";
import { ProgressBar } from "@/components/progressBar/ProgressBar";
import { GameDescBox } from "@/components/GameDesc/GameDescBox";
import { buttonDescription } from "../../../../constant/constants";
import { styled } from "styled-components";

export default function StagePage({ params }) {
  const stageNumber = params.slug;
  return (
    <DescWrapper>
      <ProgressBar value={stageNumber * 10} />
      <GameDescBox
        descHeader={`Q.${stageNumber}`}
        desc={
          "해리포터 세계에서 가장 강력한 마법 물약은 무엇이라고 생각하나요?"
        }
        startButtonDesc={""}
        buttonDesc={buttonDescription[+stageNumber - 1]}
        stageNumber={stageNumber}
      />
    </DescWrapper>
  );
}

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 800px;
  border: 3px solid #8c95be;
  border-radius: 20px;
  background-color: #000000aa;

  @media (max-width: 700px) {
    width: 80%;
    height: auto;
    padding: 10% 0px;
  }
`;
