const app = require('./app')
const config = require('./config')
const database = require('./db')

database()

app.listen(config.PORT, () => {
  console.log(`Example app listening at http://localhost:${config.PORT}`)
})
