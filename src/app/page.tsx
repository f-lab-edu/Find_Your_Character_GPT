"use client";
import { GameDescBox } from "@/components/GameDesc/GameDescBox";
import { startPage } from "../../constant/constants";
import { styled } from "styled-components";

export default function Home() {
  return (
    <DescWrapper>
      <GameDescBox descHeader={startPage.startHeader} startButtonDesc={startPage.startButton} buttonDesc={[]} />
    </DescWrapper>
  );
}

const DescWrapper = styled.div`
  position: relative;
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
