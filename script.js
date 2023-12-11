export function multiply(num1, num2) {
    return num1 * num2
}

export function concatOdds(array1, array2) {
    // how to concat odds from array1 and array2
    // return the new array
    let oddsArray = []

    // do the odds check and add the odds to the oddsArray
    array1.forEach((item) => {if (item % 2 !== 0 && !oddsArray.includes(item)) oddsArray.push(item)})
    array2.forEach((item) => {if (item % 2 !== 0 && !oddsArray.includes(item)) oddsArray.push(item)})
    return oddsArray
}