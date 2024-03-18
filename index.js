// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so,
//     for example:

// 3-- > 15(3 * 5¹)
// 10-- > 250(10 * 5²)
// 200-- > 25000(200 * 5³)
// 0-- > 0(0 * 5¹) -
//     3-- > -15(-3 * 5¹)


export function jacksTrickNumber(number) {
    //get number of digits in the number
    const numberOfDigits = number.toString().length;
    //mulply number by 5 to the degree of digit number
    const fiveToPowerOfDigits = Math.pow(5, numberOfDigits);
    //multiply the actual number
    const result = number * fiveToPowerOfDigits;

    return result;
}


