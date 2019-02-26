const express = require('express')
const cors = require('cors');
const app = express()
const port = 4444

app.use(cors());

app.get('/', (req, res) => {
  req.setTimeout(0)
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');

  res.send('Hello World!')
});

app.get('/api', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');

  res.send('Hello ' + Math.floor(Math.random() * Math.floor(1000)))
});

app.listen(port, '0.0.0.0', () => console.log(`Example App listening on port ${port}!`))