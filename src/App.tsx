import './App.css';
import { useEffect, useState } from "react";
import TopPage from './pages/TopPage';
import WorldPage from './pages/WorldPage';
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage ></TopPage>} />
        <Route path="world" element={<WorldPage></WorldPage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
