"use client";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";

import StyledComponentsRegistry from "./registry";
import { styled } from "styled-components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body>
        <StyledComponentsRegistry>
          <RecoilRoot>
            <StyleWrapper>{children}</StyleWrapper>
          </RecoilRoot>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
const StyleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url("img/background.jpg");
  background-position: center;
  background-size: cover;
`;
