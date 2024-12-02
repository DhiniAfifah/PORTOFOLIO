// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// src/main.tsx

import { createRoot } from "react-dom/client";
import { Routes } from "@generouted/react-router";
import { Global } from "@emotion/react";
import { Provider } from "@/components/ui/provider";

createRoot(document.getElementById("root")!).render(
  <Provider>
    {/* Global Styles */}
    <Global
      styles={`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      `}
    />
    <Routes />
  </Provider>
);
