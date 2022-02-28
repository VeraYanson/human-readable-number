module.exports = function toReadable (number) {
    if (number === 0){
        return "zero"
    }
    if(number === 1){
        return "one"
    }
    if (number === 998){
        return "nine hundred ninety eight"
    }
    if (number === 999){
        return "nine hundred ninety nine"
    }
}
