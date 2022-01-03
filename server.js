const {WebSocketServer} = require('ws');
const Client = require('./ping');

const wss = new WebSocketServer({
  port: 3000,
});

wss.on('connection', (ws) => {
  ws.on('message', (data, isBinary) => {
    console.log(Buffer.isEncoding(data))
    console.log(Buffer.from(data.toJSON().data).toString('utf8'))
  })
  const client = new Client(ws);
  client.start();
  ws.on('pong', (data) => {
    client.clear();
  });
  ws.on('close', () => {
    console.log('close');
  });
  ws.on('error', () => {
    console.log('error')
  })
})

