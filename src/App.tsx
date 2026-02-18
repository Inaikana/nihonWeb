import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { TopBar } from "./components/TopBar";
import { Home } from "./pages/Home";
import { Grammars } from "./pages/Grammars";
import { Words } from "./pages/Words";
import { VerbRule } from "./pages/VerbRule";

const App: React.FC = () => {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grammars" element={<Grammars />} />
        <Route path="/words" element={<Words />} />
        <Route path="/verbrule" element={<VerbRule />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
