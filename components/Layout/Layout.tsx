import Head from "next/head";
import { Footer } from "../footer";
import { Navbar } from "../Navbar";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ title = "Alica Art", children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
};
