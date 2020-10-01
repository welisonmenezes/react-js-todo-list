import React from "react";
import { AppProvider } from "./contexts/AppContext";
import Root from "./components/Root";

function App() {
    return (
        <AppProvider>
            <Root />
        </AppProvider>
    );
}

export default App;
