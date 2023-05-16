import { styled } from "styled-components";
import { FloatButton } from "../../components/floatButton/FloatButton";
import { StartButton } from "../../components/floatButton/StartButton";
import Link from "next/link";

export const GameDescBox = ({ descHeader, desc, startButtonDesc, buttonDesc }) => {
  return (
    <DescBox>
      <DescHeader>{descHeader}</DescHeader>
      <Desc>{desc}</Desc>
      {startButtonDesc !== "" ? (
        <Link href="/stage">
          <StartButton startButtonDesc={startButtonDesc} />
        </Link>
      ) : (
        <FloatButton buttonDesc={buttonDesc} />
      )}
    </DescBox>
  );
};

const DescBox = styled.div`
  padding-top: 6em;
  margin: 0 auto;
  text-align: center;
  max-width: 50em;
  height: auto;
  position: relative;
  background-image: url(../img/harry.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  opacity: 85%;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: -9999;
`;

const DescHeader = styled.h2`
  margin-bottom: 3em;
  z-index: 10;
`;

const Desc = styled.p`
  font-size: 1em;
  font-weight: bold;
  line-height: 1.5;
  z-index: 10;
  margin-bottom: 40em;
`;
