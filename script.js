function fiver(number) {
    if (!Number.isInteger(number)) {
        return null
    }
    let isEven = number % 2 === 0
    let isOdd = !isEven
    let isFiver = number % 5 === 0
    let isNotFiver = !isFiver

    if (isEven && isFiver) { 
        return "evenfiver"
    } else if (isEven && isNotFiver) {   
        return "even"
    } else if (isOdd && isFiver) {
        return "oddfiver"
    } else if (isOdd && isNotFiver) {    
        return "odd"
    } else {
        return null
    }
}

console.log(fiver(7) === "odd")
console.log(fiver(4) === "even")
console.log(fiver(125) === "oddfiver")
console.log(fiver(130) === "evenfiver")