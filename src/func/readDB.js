const path = require('path')
const fs = require('node:fs/promises')

const databasePath = path.resolve(process.cwd(), 'db', 'users.json')

const readDB = async () => {
    const users = await fs.readFile(databasePath, {encoding: "utf-8"})
    return JSON.parse(users)
}

module.exports = {
    readDB
}