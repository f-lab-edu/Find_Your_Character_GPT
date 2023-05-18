import styled from "styled-components";

export const ContentFont = ({ margin, size, desc }) => {
  return (
    <Content margin={margin} size={size}>
      {desc}
    </Content>
  );
};

const Content = styled.p`
  margin: ${({ margin }) => margin + "px"} 0;
  color: white;
  font-family: BookkMyungjo-Bd;
  font-size: ${({ size }) => size + "px"};
  line-height: 1.8;

  @media (max-width: 800px) {
    font-size: ${({ size }) => size / 6 + "vw"};
  }
`;
