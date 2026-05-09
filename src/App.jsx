import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Design from "./components/design/Design";
import Team from "./components/team/Team";
import Numbers from "./components/numbers/Numbers";
import Work from "./components/work/Work";
import Skills from "./components/Skills/Skills";
import Pricing from "./components/pricing/Pricing";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Design />
      <Team />
      <Numbers />
      <Work/>
      <Skills/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </>
  );
};
export default App;
