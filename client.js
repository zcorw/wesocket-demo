const WebSocket = require('ws');

const create = () => {
  const ws = new WebSocket('ws://127.0.0.1:3000', { perMessageDeflate: false });
  ws.on('open', () => {
    console.log('open')
    ws.send('something');
  });
  
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });
  
  ws.on('close', () => {
    console.log('close')
    setTimeout(create, 6000);
  });
  ws.on('error', () => {
    console.log('error')
  });
}
create();