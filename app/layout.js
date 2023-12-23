import "./globals.css";
import { roboto, comfortaa } from "./ui/font";


export const metadata = {
  title: "Figchat",
  description: "Chat for the Millenials",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${comfortaa.variable} ${roboto.variable}`} >
        <main className="md:hidden">
          {children}
        </main>
        <h1 className="hidden md:block text-3xl font-semibold text-center">
In progress
        </h1>
      </body>
    </html>
  );
}
