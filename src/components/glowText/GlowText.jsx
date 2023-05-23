import styled, { keyframes } from "styled-components";

export const GlowText = ({ margin, desc, size }) => {
  return (
    <GlowTxt margin={margin} size={size}>
      {desc}
    </GlowTxt>
  );
};
const glow = keyframes`
  0% {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #1826ef, 0 0 40px #1826ef;
  }
  
  100% {
    text-shadow: 0 0 20px #fff, 0 0 30px #8990fb, 0 0 40px #8990fb, 0 0 50px #8990fb;
  }
`;
const GlowTxt = styled.span`
  margin: ${({ margin }) => margin + "px"} 0;
  color: white;
  font-size: ${({ size }) => size + "px"};
  text-align: center;
  animation: ${glow} 1.5s ease-in-out infinite alternate;
  -webkit-animation: ${glow} 1.5s ease-in-out infinite alternate;
  @media (max-width: 800px) {
    font-size: ${({ size }) => size / 6 + "vw"};
  }
`;
