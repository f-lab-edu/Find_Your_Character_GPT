"use client"
import "../styles/globals.css";
import { Inter, Nanum_Myeongjo } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const nanumMyeongjo = Nanum_Myeongjo({ subsets: ["latin"], weight: ["400", "700", "800"] });

import StyledComponentsRegistry from "./registry";
import { styled } from "styled-components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={nanumMyeongjo.className}>
      <body>
        <StyledComponentsRegistry>
          <StyleWrapper>{children}</StyleWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
const StyleWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #bcbcbc;
`
