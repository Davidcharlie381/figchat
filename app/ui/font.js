import { Roboto, Comfortaa } from "next/font/google";

export const roboto = Roboto({
    weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
});
