import React from "react";
import { TopBar } from "./components/TopBar";
import { Home } from "./pages/Home";

const App: React.FC = () => {
  return (
    <>
      <TopBar />
      <Home />
    </>
  );
};

export default App;
