"use client";
import "../styles/globals.css";
import { Inter, Nanum_Myeongjo } from "next/font/google";
import Script from "next/script";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });
const nanumMyeongjo = Nanum_Myeongjo({ subsets: ["latin"], weight: ["400", "700", "800"] });

import StyledComponentsRegistry from "./registry";
import { styled } from "styled-components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={nanumMyeongjo.className}>
      <head>
        <Script src="https://t1.kakaocdn.net/kakao_js_sdk/2.2.0/kakao.min.js" integrity="sha384-x+WG2i7pOR+oWb6O5GV5f1KN2Ko6N7PTGPS7UlasYWNxZMKQA63Cj/B2lbUmUfuC" crossOrigin="anonymous"></Script>
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
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url("img/background.jpg");
  background-position: center;
  background-size: cover;
`;
