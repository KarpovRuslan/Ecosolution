import Header from "./components/Header/Header";
import Main from "./components/Main/main";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Electricity from "./components/Electricity/Electricity";
import { Faq } from "./components/Faq/Faq";

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <About />
      <Electricity />
      <Faq />
      {/*<Cases />
      <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
