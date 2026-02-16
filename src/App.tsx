import React from "react";
import { Routes, Route } from "react-router-dom";
import { TopBar } from "./components/TopBar";
import { Home } from "./pages/Home";
import { Grammars } from "./pages/Grammars";

const App: React.FC = () => {
  return (
    <>
      <TopBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grammars" element={<Grammars />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
