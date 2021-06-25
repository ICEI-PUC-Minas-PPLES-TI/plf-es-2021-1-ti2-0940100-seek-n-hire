const express = require('express')
const routes = require('./routes');
const cors = require('cors');
const port = 3000
const app = express()

app.all('', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(routes);


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})