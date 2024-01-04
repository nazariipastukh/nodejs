const path = require('path');
const fs = require('fs');

const {folderCreator} = require("./src/folderCreator");
const {fileCreator} = require("./src/fileCreator");
const {typeChecker} = require("./src/typeChecker")

const creator = async () => {
    try {
        const folderPath = path.join(__dirname, 'mainFolder');

        fs.mkdir(folderPath, (err) => {
            if (err) throw new Error();
        });

        folderCreator(5)
        fileCreator(5)
        typeChecker(folderPath)

    } catch (e) {
        if (e) throw new Error()
    }
}

creator().then()