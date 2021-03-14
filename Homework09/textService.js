const fs = require('fs');
let json = "students.json";

module.exports = {
    writeFile: function(text) {
        fs.writeFile(json, text, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was successfully");
        })
    },
    readAndParseJsonFile: function() {
        let content = fs.readFileSync(jsonFile, { encoding: 'utf8' });
        console.log(content);
        return JSON.parse(content);
    }
};