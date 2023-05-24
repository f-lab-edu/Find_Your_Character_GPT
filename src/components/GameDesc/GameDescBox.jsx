import { styled } from "styled-components";
import { FloatButton } from "../../components/floatButton/FloatButton";
import { StartButton } from "../../components/floatButton/StartButton";

export const GameDescBox = ({ descHeader, desc, startButtonDesc, buttonDesc, stageNumber }) => {
  return (
    <DescWrapper>
      <DescBox>
        <DescHeader>{descHeader}</DescHeader>
        <Desc>{desc}</Desc>
        <ButtonBox>
          {startButtonDesc !== "" ? <StartButton startButtonDesc={startButtonDesc} /> : buttonDesc.map((ele, i) => <FloatButton buttonDesc={buttonDesc[i]} key={i} stageNumber={stageNumber} />)}
        </ButtonBox>
      </DescBox>
    </DescWrapper>
  );
};

const DescWrapper = styled.div``;
const DescBox = styled.div`
  padding-top: 6em;
  margin: 0 auto;
  text-align: center;
  max-width: 50em;
  height: auto;
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
  margin-bottom: 2em;
  z-index: 10;
  font-weight: 800;
  font-size: 2em;
`;

const Desc = styled.p`
  line-height: 1.5;
  z-index: 10;
  font-size: 1.3em;
  font-weight: 400;
  padding: 0 4em;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15em;
`;
