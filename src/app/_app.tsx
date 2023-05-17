import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Hahmlet } from "next/font/google";

const hahmlet = Hahmlet({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={hahmlet.className}>
      <Component {...pageProps} />;
    </main>
  );
}
