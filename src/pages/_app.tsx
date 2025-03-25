import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserContextProvider } from "./Context/userContext";
import Header from "@/Component/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Header></Header>
      <Component {...pageProps} />
    </UserContextProvider>
    
  );


}
