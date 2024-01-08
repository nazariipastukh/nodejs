const express = require('express')
const app = express()

const {readDB} = require('./func/readDB')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})

app.get('/users', async (req, res) => {
    const users = await readDB()

    res.status(200).json(users)
})

app.get('/users/:id', async (req, res) => {
    const {id} = req.params

    const users = await readDB()
    const userById = users.find(user => user.id === +id)

    res.status(200).json(userById)
})