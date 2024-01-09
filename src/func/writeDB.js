const path = require('path')
const fs = require('node:fs/promises')

const databasePath = path.resolve(process.cwd(), 'db', 'users.json')

const writeDB = async (data) => {
    await fs.writeFile(databasePath, JSON.stringify(data))
}

module.exports = {
    writeDB
}