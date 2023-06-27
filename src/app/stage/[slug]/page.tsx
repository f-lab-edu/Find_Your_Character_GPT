"use client";
import React from "react";
import { ProgressBar } from "@/components/progressBar/ProgressBar";
import { GameDescBox } from "@/components/GameDesc/GameDescBox";
import { buttonDescription } from "../../../../constant/constants";
import { styled } from "styled-components";
import questions from "../../../question.json";

interface StagePageProps {
  params: {
    slug: [{ text: string; state: string }];
  };
}

export default function StagePage({ params }: StagePageProps) {
  const stageNumber = params.slug;
  const { question, choices } = questions[Number(stageNumber) - 1];

  return (
    <DescWrapper>
      <ProgressBar value={Number(stageNumber) * 10} />
      <GameDescBox descHeader={`스테이지${stageNumber}`} desc={question} startButtonDesc={""} buttonDesc={choices} stageNumber={stageNumber} />
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
