import { BrowserRouter } from "react-router-dom";
import Routers from "./Routes/Router";
import { testMode } from "./Apis/api";
import { Toaster } from "react-hot-toast";

import "./App.css";
function App() {
    testMode();

    return (
        <BrowserRouter>
            <Toaster toastOptions={{ duration: 3000 }} />
            <Routers />
        </BrowserRouter>
    );
}

export default App;
