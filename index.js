require('babel/register')({
    stage: 0
});
var server = require('./server');
const PORT = process.env.PORT || 3001;
server.listen(PORT, function () {
  console.log('Server listening on', PORT);
});