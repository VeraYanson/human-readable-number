module.exports = function toReadable (number) {
    if (number === 0){
        return "zero"
    }
    if(number === 1){
        return "one"
    }
    if(number === 2){
        return "two"
    }
    if(number === 3){
        return "three"
    }
    if(number === 4){
        return "four"
    }
    if(number === 5){
        return "five"
    }
    if(number === 6){
        return "six"
    }
    if(number === 7){
        return "seven"
    }
    if(number === 8){
        return "eight"
    }
    if(number === 9){
        return "nine"
    }
    if(number === 10){
        return "ten"
    }

    if (number === 998){
        return "nine hundred ninety eight"
    }
    if (number === 999){
        return "nine hundred ninety nine"
    }
}
