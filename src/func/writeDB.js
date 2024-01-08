const path = require('path')
const fs = require('node:fs/promises')

const databasePath = path.resolve(process.cwd(), 'db', 'users.json')

const writeDB = async (user) => {
    await fs.appendFile(databasePath, user)
}

module.exports = {
    writeDB
}