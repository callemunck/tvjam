import express from "express";
import { WebSocketServer } from 'ws';

const app = express();

app.get('/health', (_req, res ) => {
  res.json({ ok: true });
});

const server = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('New WebSocket connection established');
  
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    ws.send(`Server received: ${message}`);
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});