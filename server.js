const WebSocket = require('ws');

const PORT = process.env.PORT || 3001;

const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', (ws) => {
    console.log('Client Connected');

    ws.send('Connected To Server');

    ws.on('message', (msg) => {
        console.log(msg.toString());
        ws.send('Reply: ' + msg);
    });
});

console.log(`Server Running On Port ${PORT}`);
