const port = `8000`;

const express = require('express');
const path = require('path');

const expressApp = express();
const rootPath = path.normalize(__dirname+'/../');

expressApp.use(express.static(rootPath + '/app'));
expressApp.listen(port);

expressApp.get('*', function(req, res) { res.sendFile(rootPath + '/app/index.html'); });

console.log(`Server is up and running on port ${port}....`)