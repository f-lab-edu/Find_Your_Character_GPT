import styled from "styled-components";

export const TitleFont = ({ margin, desc, size }) => {
  return (
    <Title margin={margin} size={size}>
      {desc}
    </Title>
  );
};

const Title = styled.h1`
  margin: ${({ margin }) => margin + "px"} 0;
  color: white;
  font-family: KimjungchulMyungjo-Bold;
  font-size: ${({ size }) => size + "px"};
  text-align: center;

  @media (max-width: 800px) {
    font-size: ${({ size }) => size / 6 + "vw"};
  }
`;
