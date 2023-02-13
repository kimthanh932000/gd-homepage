import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
