import React from "react";
import Layout from "./components/Layout";
import Socket from "./utils/Socket";
function App() {
  return (
    <div className="App h-screen grid place-items-center bg-slate-900">
      <Layout />
    </div>
  );
}

export default App;
