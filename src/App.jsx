import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <main>
        <hr />
        <Services />
        <hr />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;
