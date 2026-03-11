const express = require('express')

// Call the zod schema:
const { userSchema }  = require("./schema")

// utility function call
const { isValidCompany } = require('./validation')
const app = express()
app.use(express.json());
//Where the server will run or deploy
const port = 3000

app.get('/hello-world', (req, res) => {
  res.send('hello world')
})

app.post('/companies', (req, res) => {
  const result = isValidCompany(req.body)
  
  if (result.success) {
    res.status(200).send("Request Successful")
  }

  else {
    res.status(400).json({ errors: result.error.errors });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
