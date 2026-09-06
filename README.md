# tvjam
 
Build party games where a shared screen shows the game and players' phones become the controllers.
 
One person opens the game on a TV, laptop or projector. Everyone else scans a QR code and their phone turns into a controller. Nothing to install.
 
> **Status: early.** Nothing works yet. This describes where the project is going, not what it does today.
 
## The idea
 
Party games run mostly the same loop: show a prompt, collect answers, reveal, score, repeat. The server, the room codes, the reconnects and both screens work the same way every time. tvjam builds that once, so a new game is just its rules.
 
Two decisions follow from that:
 
**Each player gets their own view.** A phone only receives what that player is allowed to see, so hidden hands and secret roles actually work.
 
**Games say what to show, not how to draw it.** No separate frontend per game.
 
## Development
 
Requires Node 22+.
 
```bash
npm install
npm run dev
```