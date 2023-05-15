import styled from "styled-components";

export const FloatButton = ({ desc }) => {
  return <FloatBtn>{desc}</FloatBtn>;
};

const FloatBtn = styled.button`
  width: 130px;
  margin-top: 70px;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: all 0.2s;
  background: #25809f;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  :hover {
    margin-left: 0px;
    transform: scale(1.1, 1.1);
    -ms-transform: scale(1.1, 1.1);
    -webkit-transform: scale(1.1, 1.1);
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  }
`;
