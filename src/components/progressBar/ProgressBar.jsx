import { styled } from "styled-components";

export const ProgressBar = ({ value }) => {
  return <Progress max={100} value={value}></Progress>;
};

const Progress = styled.progress`
  width: 100%;
  height: 30px;
`;
