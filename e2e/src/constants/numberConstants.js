module.exports = new function() {
    this.getRandomNumbers = function(number) {
        if(number == 2){
            return Math.floor(Math.random() * 100).toString()

        }
        if(number == 3){
            return Math.floor(Math.random() * 100).toString()
        }
        if(number == 4){
            return Math.floor(Math.random() * 1000).toString()
        }
        if(number == 5){
            return Math.floor(Math.random() * 100000).toString()
        }
        if(number == 6){
            return Math.floor(Math.random() * 1000000).toString()
        }
        if(number == 9){
            return Math.floor(Math.random() * 1000000000).toString()
        }
        if(number == 10){
            return Math.floor(Math.random() * 10000000000).toString()
        }
    }

    this.getRandomNineNumbers = function() {
        let number = this.getRandomNumbers(3) + "-" +
                    this.getRandomNumbers(2) + "-" +
                    this.getRandomNumbers(4) 
                    return number.toString()
    }

    this.getRandomTenNumbers = function() {
        let number = this.getRandomNumbers(3) + "-" + 
                    this.getRandomNumbers(3) + "-" +
                    this.getRandomNumbers(4)
                    return number.toString()
    }

}
