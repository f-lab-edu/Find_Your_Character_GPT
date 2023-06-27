import styled from "styled-components";
interface ButtonProps {
  buttonDesc: string,
  clickHandler?: () => void;
}
export const ResultButton = ({ buttonDesc, clickHandler }: ButtonProps) => {
  return <FloatBtn onClick={clickHandler}>{buttonDesc}</FloatBtn>;
};

const FloatBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 50px;
  margin: 30px 0 50px;
  font-weight: 600;
  font-size: 18px;
  color: #fff;
  border-radius: 5px;
  transition: all 0.2s;
  background: #25809f;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover {
    margin-left: 0px;
    transform: scale(1.1, 1.1);
    -ms-transform: scale(1.1, 1.1);
    -webkit-transform: scale(1.1, 1.1);
    will-change: transform;
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 700px) {
    height: 30px;
    padding: 25px;
    font-size: 16px;
  }
`;
