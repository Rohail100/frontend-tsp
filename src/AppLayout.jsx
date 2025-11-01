import Header from "./components/layout/Header";
import TopBar from "./components/layout/TopBar";
import Footer from "./components/layout/Footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <TopBar />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;