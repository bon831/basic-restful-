const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// get is one of the method to request to the server

app.post('/bye', (req, res) => {
    res.send('Bye Bye World!')
  })
// post is one of the method to request to the server

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//mornally in search bar use get method, inside the website like fill the form use post
