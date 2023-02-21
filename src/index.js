import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProviderContext } from "./store/auth-context";
import App from "./App";
import { ChatContextProvider } from "./store/chat-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProviderContext>
     <ChatContextProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
     </ChatContextProvider>
    </AuthProviderContext>
);