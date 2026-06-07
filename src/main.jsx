import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "./context/ThemeContext.jsx"
import ResumePage from './Comps/ResumePage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="resume" element={<ResumePage />} />
        </Routes>
      </BrowserRouter>,
    </ThemeProvider>
  </StrictMode>,
)
