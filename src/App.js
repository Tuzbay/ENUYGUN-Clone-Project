import "./App.css";
import Brand from "./components/Brand/Brand";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <img src="/images/45196.jpeg" alt="" />
      <Brand />
      <img className="axess" src="/images/axess-reklam-44988.jpeg" alt="" />
    </div>
  );
}

export default App;
