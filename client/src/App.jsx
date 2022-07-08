import React, {useState, useEffect} from "react";
import './App.css';
import {Typography} from "@mui/material";
import { io } from "socket.io-client";

const socket = io(window.location.host, {
    withCredentials: true
});
const ENDPOINT = "http://127.0.0.1:4001";

function App() {

    const [isConnected, setIsConnected] = useState(socket.connected);

    useEffect(() => {
        const socket = io(ENDPOINT);

        socket.on("connect", () => {
            setIsConnected(true);
        });
        socket.on("disconnect", () => {
            setIsConnected(false);
            console.log("disconnected, trying to reconnect...");
            socket.connect();
        });
        socket.on("error", (error) => {
           console.error(error);
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
        };

    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Avalon</h1>
            </header>
            {isConnected && <h2>Connected!</h2>}
        </div>
    );
}

export default App;
