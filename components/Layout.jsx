import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="px-36 pt-20">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
