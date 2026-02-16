import React from "react";
import { Routes, Route } from "react-router-dom";
import { TopBar } from "./components/TopBar";
import { Home } from "./pages/Home";
import { Grammars } from "./pages/Grammars";
import { Words } from "./pages/Words";
import { VerbRule } from "./pages/VerbRule";

const App: React.FC = () => {
  return (
    <>
      <TopBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grammars" element={<Grammars />} />
          <Route path="/words" element={<Words />} />
          <Route path="/verbrule" element={<VerbRule />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
