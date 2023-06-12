"use client";
import React from "react";
import { ProgressBar } from "@/components/progressBar/ProgressBar";
import { GameDescBox } from "@/components/GameDesc/GameDescBox";
import { buttonDescription } from "../../../../constant/constants";
import { styled } from "styled-components";

const StagePage = ({ params }) => {
  const stageNumber = params.slug;
  return (
    <DescWrapper>
      <DescBox>
        <ProgressBar value={stageNumber * 10} />
        <GameDescBox descHeader={`스테이지${stageNumber}`} desc={"설명설명설명"} startButtonDesc={""} buttonDesc={buttonDescription[+stageNumber - 1]} stageNumber={stageNumber} />
      </DescBox>
    </DescWrapper>
  );
};

const DescWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  padding: 50px;
  background-image: url("img/harry.jpeg");
  background-position: center;
  background-size: cover;
`;
const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70%;
  padding: 20px;
`;

export default StagePage;
