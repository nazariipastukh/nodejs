const express = require('express')
const app = express()

const {readDB} = require('./func/readDB')
const {writeDB} = require('./func/writeDB')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})

app.get('/users', async (req, res) => {
    try {
        const users = await readDB()

        if (!users) {
            throw new Error('Empty')
        }

        res.status(200).json(users)
    } catch (e) {
        res.status(400).json(e.message)
    }
})

app.get('/users/:id', async (req, res) => {
    try {
        const {id} = req.params
        const users = await readDB()
        const userById = users.find(user => user.id === +id)

        if (!userById) {
            throw new Error('Wrong ID')
        }

        res.status(200).json(userById)
    } catch (e) {
        res.status(400).json(e.message);
    }
})

app.post('/users', async (req, res) => {
    try {
        const {name, age, email} = req.body

        if (!name || name.length <= 3) {
            throw new Error('Wrong name')
        }
        if (!age || age <= 0) {
            throw new Error('Wrong age')
        }
        if (!email) {
            throw new Error('Wrong email')
        }

        const users = await readDB()
        const lastUser = users[users.length - 1]
        const createdUser = {id: lastUser.id + 1, name, email, age}

        users.push(createdUser)
        await writeDB(users)

        res.status(201).json(createdUser)
    } catch (e) {
        res.status(400).json(e.message)
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const {id} = req.params
        const users = await readDB()
        const userById = users.find(user => user.id === +id)

        if (!userById) {
            throw new Error('Wrong id')
        }

        users.splice(+id - 1, 1)
        await writeDB(users)

        res.status(201).json(users)
    } catch (e) {
        res.status(400).json(e.message)
    }
})

app.put('/users/:id', async (req, res) => {
    try {
        const {id} = req.params
        const {name, email, age} = req.body

        const users = await readDB()
        let userById = users.find(user => user.id === +id)

        if (!userById) {
            throw new Error('Wrong id')
        }
        if (!name || name.length <= 3) {
            throw new Error('Wrong name')
        }
        if (!age || age <= 0) {
            throw new Error('Wrong age')
        }
        if (!email) {
            throw new Error('Wrong email')
        }

        userById.name = name
        userById.age = age
        userById.email = email

        await writeDB(users)

        res.status(201).json(userById)
    } catch (e) {
        res.status(400).json(e.message)
    }
})
