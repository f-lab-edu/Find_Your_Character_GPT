"use client";
import { GameDescBox } from "@/components/GameDesc/GameDescBox";
import { Logo } from "@/components/Logo/Logo";
import { startPage } from "../../constant/constants";
import { styled } from "styled-components";

export default function Home() {
  return (
    <>
      <DescWrapper>
        <DescBox>
          <GameDescBox descHeader={startPage.startHeader} desc={startPage.startDesc} startButtonDesc={startPage.startButton} buttonDesc={""} stageNumber="" />
        </DescBox>
      </DescWrapper>
    </>
  );
}

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
  height: 70%;
  padding: 20px;
`;
