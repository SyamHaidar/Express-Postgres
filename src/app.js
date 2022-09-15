const express = require('express')
const router = require('./routes')

// -------------------------------------------------------------------------------------

const app = express()
const port = 3000

// parse incoming requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// route
app.use('/product', router)

app.listen(port, () => console.log(`Server running at port ${port}`))
