const path = require('path')
const fs = require('fs')

const fileCreator = (number) => {
    for (let i = 0; i < number; i++) {
        const newFolderPath = path.join(process.cwd(), 'mainFolder', `file${i + 1}.txt`);

        fs.writeFile(newFolderPath, `file${i + 1}`, (err) => {
            if (err) throw new Error();
        });
    }
};

module.exports = {
    fileCreator
}