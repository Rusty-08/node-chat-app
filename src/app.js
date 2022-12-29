const path = require('path')
const express = require('express')

const app = express()

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running in port ${port}`)
})