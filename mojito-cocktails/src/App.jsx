import Home from "./Home";

import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import "./App.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
