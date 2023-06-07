"use client";
import "../styles/globals.css";
import { Inter, Nanum_Myeongjo } from "next/font/google";
import { RecoilRoot } from "recoil";
declare global {
  interface Window {
    Kakao: any;
  }
}
const inter = Inter({ subsets: ["latin"] });
const nanumMyeongjo = Nanum_Myeongjo({ subsets: ["latin"], weight: ["400", "700", "800"] });

import StyledComponentsRegistry from "./registry";
import { styled } from "styled-components";
import { useEffect } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html className={nanumMyeongjo.className}>
      <head>
        <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.2.0/kakao.min.js" integrity="sha384-x+WG2i7pOR+oWb6O5GV5f1KN2Ko6N7PTGPS7UlasYWNxZMKQA63Cj/B2lbUmUfuC" crossOrigin="anonymous"></script>
      </head>
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
  width: 100%;
  height: 100vh;
  background-color: #bcbcbc;
`;
