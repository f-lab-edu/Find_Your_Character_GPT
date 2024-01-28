import Lottie from "react-lottie-player";
import loading from "./loading.json";
import { keyframes, styled } from "styled-components";

export const Loading = () => {
  return (
    <Overlay>
      <GlowText>Loading...</GlowText>
      <LottieContainer>
        <Lottie className="lottie-animation" loop animationData={loading} play />
      </LottieContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9); /* 반투명한 배경 색상 설정 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const glow = keyframes`
  0% {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #1826ef, 0 0 40px #1826ef;
  }
  
  100% {
    text-shadow: 0 0 20px #fff, 0 0 30px #8990fb, 0 0 40px #8990fb, 0 0 50px #8990fb;
  }
`;
const GlowText = styled.span`
  color: white;
  font-size: 50px;
  text-align: center;
  animation: ${glow} 1.5s ease-in-out infinite alternate;
  @media (max-width: 800px) {
    font-size: 5vh;
  }
`;
const LottieContainer = styled.div`
  .lottie-animation {
    width: 600px;
    height: 560px;

    @media (max-width: 550px) {
      width: 100%;
      height: auto;
    }
  }
`;
