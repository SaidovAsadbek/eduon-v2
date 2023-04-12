import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import { StateProvider } from "./context/Context";
import reducer, { initialState } from "./reducer/reducer";

const root = ReactDOM.createRoot(document.getElementById("eduon"));
root.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    </React.StrictMode>
);
