import express from "express";
import { WebSocketServer, WebSocket } from 'ws';

const app = express();

app.get('/health', (_req, res ) => {
  res.json({ ok: true });
});

const server = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const wss = new WebSocketServer({ server });
const players = new Map<string, WebSocket>();

wss.on('connection', (ws) => {
    const playerId = crypto.randomUUID();
    players.set(playerId, ws);
    console.log('New WebSocket connection established, playerId:', playerId);
    ws.send(JSON.stringify({ type: 'connected', playerId }));
  
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    ws.send(`Server received: ${message}`);
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed, playerId:', playerId);
    players.delete(playerId);
  });
});