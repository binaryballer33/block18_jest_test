function multiply(num1, num2) {
    return num1 * num2
}

function concatOdds(array1, array2) {
    // how to concat odds from array1 and array2
    // return the new array
    let oddsArray = []

    // do the odds check and add the odds to the oddsArray
    array1.forEach((item) => {if (item % 2 !== 0 && !oddsArray.includes(item)) oddsArray.push(item)})
    array2.forEach((item) => {if (item % 2 !== 0 && !oddsArray.includes(item)) oddsArray.push(item)})
    return oddsArray
}

describe("multiply", () => {
    test("multiply two positive numbers", () => {
        expect(multiply(2, 3)).toBe(6);
    });
    
    test("multiply 1 negative number for num1 and 1 positive number for num2", () => {
        expect(multiply(-2, 3)).toBe(-6);
    });
    
    test("multiply 1 positive number for num1 and 1 negative number for num2", () => {
        expect(multiply(2, -3)).toBe(-6);
    });
    
    test("multiply two negative numbers", () => {
        expect(multiply(-2, -3)).toBe(6);
    });
});

describe("concatOdds", () => {
    const array1 = [1, 2, 3, 4, 5, 7, 9, 10];
    const array2 = [6, 7, 8, 9, 10, 1, 3, 5];

    test("concatOdds with two arrays of odds and evens", () => {
        expect(concatOdds(array1, array2)).toEqual([1, 3, 5, 7, 9]);
    });

    test("concatOdds with one array of odds and one array of evens", () => {
        expect(concatOdds([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])).toEqual([1, 3, 5, 7, 9]);
    });

    test("concatOdds with two arrays of evens", () => {
        expect(concatOdds([2, 4, 6, 8, 10], [2, 4, 6, 8, 10])).toEqual([]);
    });
});

