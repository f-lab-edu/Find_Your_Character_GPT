import { styled } from "styled-components";
import { FloatButton } from "../floatButton/FloatButton";
import { StartButton } from "../floatButton/StartButton";
import { GlowText } from "../glowText/GlowText";

interface GameDescBoxProps {
  descHeader: string;
  desc?: string;
  startButtonDesc?: string;
  buttonDesc?: { text: string; state: string }[] | undefined;
  clickHandler?: (buttonState: string) => void;
}

export const GameDescBox = ({ descHeader, desc, startButtonDesc, buttonDesc, clickHandler }: GameDescBoxProps) => {
  return (
    <>
      <GlowText size={40} desc={descHeader} />
      {!!startButtonDesc ? (
        <>
          <Desc>
            <div>내가 만약 해리포터 영화 속 주인공이라면?</div>
            <div>GPT가 찾아주는 나의 인생 마법사</div>
            <p>🧙🏻‍♀️ 🧙🏻‍♀️ 🧙🏻‍♀️ 🧙🏻‍♀️ 🧙🏻‍♀️</p>
          </Desc>
          <ButtonBox>
            <StartButton startButtonDesc={startButtonDesc} />
          </ButtonBox>
        </>
      ) : (
        <>
          <Desc>{desc}</Desc>
          <ButtonBox>
            {buttonDesc?.map((choice, i) => (
              <FloatButton buttonDesc={choice.text} key={i} buttonState={choice.state} clickHandler={clickHandler ? (state: string) => clickHandler(state) : undefined} />
            ))}
          </ButtonBox>
        </>
      )}
    </>
  );
};

const Desc = styled.div`
  margin: 60px 20px 40px;
  font-size: 24px;
  text-align: center;
  white-space: pre;
  line-height: 1.5;
  color: #ffffff;
  @media (max-width: 800px) {
    font-size: 3vw;
  }
  p {
    font-size: 25px;
    @media (max-width: 800px) {
      font-size: 3vw;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  a {
    width: 70%;
  }
`;
