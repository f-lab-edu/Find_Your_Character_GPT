import "../styles/globals.css";
import { Inter, Nanum_Myeongjo } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const nanumMyeongjo = Nanum_Myeongjo({ subsets: ["latin"], weight: ["400", "700", "800"] });

import StyledComponentsRegistry from "./registry";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={nanumMyeongjo.className}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
