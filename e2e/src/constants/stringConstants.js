module.exports = new function() {

    this.generateString = function(length) {
        let result = ''
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let charactersLenght = characters.length
        for(let i=0; i<length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLenght))
        }
        return result
    }
}