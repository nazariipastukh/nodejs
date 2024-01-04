const path = require('path')
const fs = require('fs')

const typeChecker = (folderPath) => {
    fs.readdir(folderPath, (err, files) => {
        files.map(file => {
            const filePath = path.join(folderPath, file);

            fs.stat(filePath, (err, stat) => {
                if (err) throw new Error();

                console.log(stat.isFile() ? "File" : "Folder", file);
            });
        })
    })
}

module.exports = {
    typeChecker
}