import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { TopBar } from "./components/TopBar";
import { Home } from "./pages/Home";
import { Grammars } from "./pages/Grammars";
import { Grammar } from "./pages/Grammar";
import { Words } from "./pages/Words";
import { VerbRule } from "./pages/VerbRule";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <>
      <TopBar />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grammars" element={<Grammars />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/words" element={<Words />} />
          <Route path="/verbrule" element={<VerbRule />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default App;
