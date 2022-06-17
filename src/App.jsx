import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Background from "./components/Background";
import InstructorsSection from "./components/InstructorsSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Background />
      <InstructorsSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </div>
  );
}

export default App;
