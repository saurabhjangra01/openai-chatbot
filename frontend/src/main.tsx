import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import { Toaster } from "react-hot-toast";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5050/api/v1";
axios.defaults.withCredentials = true; // with this true, axios will by default include the cookies in the request to backend

// creating new custom theme for material ui
const theme = createTheme({
    typography: {
        fontFamily: "Roboto Slab, serif",
        allVariants: { color: "white" },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Toaster position="bottom-right" />
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);
