const path = require('path');
const fs = require('fs');

const {folderCreator} = require("./src/folderCreator");
const {fileCreator} = require("./src/fileCreator");

const creator = async () => {
    try {
        const folderPath = path.join(__dirname, 'mainFolder');

        fs.mkdir(folderPath, (err) => {
            if (err) throw new Error();
        });

        folderCreator(5)
        fileCreator(5)

        fs.readdir(folderPath, (err, files) => {
            files.map(file => {
                const filePath = path.join(folderPath, file);

                fs.stat(filePath, (err, stat) => {
                    if (err) throw new Error();

                    console.log(stat.isFile() ? "File" : "Folder", file);
                });
            })
        })
    } catch (e) {
        if (e) throw new Error()
    }
}

creator().then()