import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#b8f6ff] flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-[#ffb8f4]">
        React + TS + Tailwind
      </h1>
      <p className="mt-4 text-gray-400 text-lg">
        如果你看到漸層色文字，代表環境完美噴發！
      </p>
      <button className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all">
        日本我來了
      </button>
    </div>
  );
};

export default App;
