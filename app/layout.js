import "./globals.css";
import { roboto, comfortaa } from "./ui/font";
import Alert from "./components/Alert";
import AlertProvider from "@/contexts/AlertContext/AlertContext";
import UserProvider from "@/contexts/UserContext/UserContext";

export const metadata = {
  title: "Figchat",
  description: "Chat for the Millenials",
};

export default async function RootLayout({ modal, children }) {
  return (
    <html lang="en">
      <body className={`${comfortaa.variable} ${roboto.variable}`}>
        <AlertProvider>
          <UserProvider>
            <main className="md:hidden">
              {modal}
              {children}
            </main>
            <h1 className="hidden md:block text-3xl font-semibold text-center">
              In progress
            </h1>
            <Alert />
          </UserProvider>
        </AlertProvider>
      </body>
    </html>
  );
}
