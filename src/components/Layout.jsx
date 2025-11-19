import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
}
