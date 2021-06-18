const express = require('express')
const routes = require('./routes');
const port = 3000
const app = express()

app.use(express.json());
app.use(routes)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})