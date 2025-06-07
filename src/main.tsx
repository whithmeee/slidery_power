import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import {ScrollProvider} from "./context/ScrollContent.tsx";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <ScrollProvider>
              <App />
          </ScrollProvider>
      </BrowserRouter>
  </StrictMode>,
)
