const path = require('path')
const fs = require('fs')

const folderCreator = (number) => {
    for (let i = 0; i < number; i++) {
        const newFolderPath = path.join(process.cwd(), 'mainFolder', `folder${i + 1}`);

        fs.mkdir(newFolderPath, (err) => {
            if (err) throw new Error();
        });
    }
};

module.exports = {
    folderCreator
}