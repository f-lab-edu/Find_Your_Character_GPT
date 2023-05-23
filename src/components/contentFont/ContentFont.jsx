import styled from "styled-components";

export const ContentFont = ({ desc }) => {
  return <Content>{desc}</Content>;
};

const Content = styled.p`
  margin: 30px 0;
  color: white;
  font-family: BookkMyungjo-Bd;
  font-size: 15px;
  line-height: 1.8;

  @media (max-width: 800px) {
    font-size: 15 / 6 + "vw";
  }
`;
