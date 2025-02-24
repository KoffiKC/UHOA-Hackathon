import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Index from "./pages/Index";
import Article from "./pages/Article";
import Topics from "./pages/Topics";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div>
                <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img
                    src={reactLogo}
                    className="logo react"
                    alt="React logo"
                  />
                </a>
              </div>
              <h1>Vite + React</h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>
            </div>
          }
        />
         <Route path="/index" element={<Index />} />
         <Route path="/about" element={<About />} />
         <Route path="/topics" element={<Topics />} />
         <Route path="/article" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
