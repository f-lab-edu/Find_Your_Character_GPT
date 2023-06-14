import { styled } from "styled-components";
interface ValueProps {
  value: number
}
export const ProgressBar = ({ value }: ValueProps) => {
  return <Progress max={100} value={value}></Progress>;
};

const Progress = styled.progress`
  width: 100%;
  height: 30px;
`;
