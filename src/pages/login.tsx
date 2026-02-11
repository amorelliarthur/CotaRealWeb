import LoginContent from "@/components/LoginContent";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Head from "next/head";

const Login = ():React.ReactElement => {
  return (
    <>
      <Head>
        <title>Cota Real</title>
        <meta name="description" content="Cota Real · Arthur Dias" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <LoginContent />
        <Footer />
      </main>
    </>
  );
}

export default Login;