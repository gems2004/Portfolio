import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="logo">
          <img src="/shape.svg" width={324} id="shape" alt="" />
          <img src="/Logo.svg" width={285} id="ge-logo" alt="" />
        </div>
        <div className="intro-text robotomono-bold-font">
          <span className="html-tags robotomono-thin-font top-tag">{`<h1>`}</span>
          <h1>Welcome to our frontend portfolio!</h1>
          <span className="html-tags robotomono-thin-font bottom-tag">{`</h1>`}</span>
        </div>
      </div>
    </>
  );
}

export default App;
