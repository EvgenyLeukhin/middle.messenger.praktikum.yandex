// Express config
const path = require('path');
const express = require('express');

const server = express();
const PORT = 8000;
const PATH = path.join(__dirname, '../../dist');

server.use(express.static(PATH));

server.listen(PORT, () => console.log(`
    Express-server is running up ...
    ---------------------------------------
    [Folder]     Serving files from:' ${PATH}
    [URL]        http://localhost:${PORT}
  `));
