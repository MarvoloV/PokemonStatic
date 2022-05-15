import { FC, PropsWithChildren, ReactNode } from "react";

import Head from "next/head";
import { NavBar } from "../ui";
interface ComponentProps {
  title: string;
  children: JSX.Element;
}

export const Layout: FC<ComponentProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon app"}</title>
        <meta name="autor" content="Jorge Luis Adco" />
        <meta name="description" content="informacion sobre el pokemon XXXXX" />
        <meta name="keywords" content="XXXx,pokemon,pokedex" />
      </Head>
      <NavBar></NavBar>
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
