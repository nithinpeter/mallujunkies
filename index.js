require('babel/register')({});
var server = require('./server');
const PORT = process.env.PORT || 3001;
server.listen(PORT, function () {
  console.log('Server listening on', PORT);
});