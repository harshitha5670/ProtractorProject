const {readFile,readFileSync,writeFile,writeFileSync} = require( "fs")

module.exports = new function() {

   this.readJson = function(propertyName, propertyToRetrieve) {
        let rawdata = readFileSync("./e2e/src/data/testData.json")
        let parse = JSON.parse(rawdata)
        let propertyValue = parse[propertyName][propertyToRetrieve]
        return propertyValue
    }
}

