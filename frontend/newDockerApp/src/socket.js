import React from 'react';
import socketio from "socket.io-client";

export const socket = socketio.connect("localhost:8080", { transports : ['websocket'], upgrade: false });
export const SocketContext = React.createContext();
