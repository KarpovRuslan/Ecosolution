import Header from "./components/Header/Header";
import Main from "./components/Main/main";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Electricity from "./components/Electricity/Electricity";
import Faq from "./components/Faq/Faq";
import Cases from "./components/Cases/Cases";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Main />
        <About />
        <Electricity />
        <Cases />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
