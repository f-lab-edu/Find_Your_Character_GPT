import { styled } from "styled-components";
import { FloatButton } from "../floatButton/FloatButton";
import { StartButton } from "../floatButton/StartButton";

export const GameDescBox = ({
  descHeader,
  desc,
  startButtonDesc,
  buttonDesc,
}) => {
  return (
    <DescWrapper>
      <DescBox>
        <DescHeader>{descHeader}</DescHeader>
        <DescTextBox>
          {" "}
          <Desc>{desc}</Desc>
        </DescTextBox>
        <ButtonBox>
          {!!startButtonDesc ? (
            <StartButton startButtonDesc={startButtonDesc} />
          ) : (
            buttonDesc.map((ele, i) => (
              <FloatButton buttonDesc={buttonDesc[i]} key={i} />
            ))
          )}
        </ButtonBox>
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
  height: 70%;
  padding: 20px;
`;
const DescHeader = styled.h2`
  font-size: 30px;
`;
const DescTextBox = styled.div`
  height: 60%;
`;
const Desc = styled.p`
  font-size: 18px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
