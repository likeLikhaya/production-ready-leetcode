function reverse(x: number): number {

    // stores the reversed number
    let reversedNumber = 0;

    // work with the absolute value so negative numbers can be handled easily
    let remainingNumber = Math.abs(x);

    // continue looping while there are still digits left
    while (remainingNumber > 0) {

        // get the last digit from the number
        const lastDigit = remainingNumber % 10;

        // shift the current reversed number left and add the extracted digit
        reversedNumber = (reversedNumber * 10) + lastDigit;

        // remove the last digit from the number
        remainingNumber = Math.floor(remainingNumber / 10);
    }

    // restore the negative sign if the original number was negative
    if (x < 0) {
        reversedNumber = reversedNumber * -1;
    }

    // 32-bit signed integer range
    const minimumInteger = -(2 ** 31);
    const maximumInteger = (2 ** 31) - 1;

    // return 0 if the reversed number is outside the valid range
    if (
        reversedNumber < minimumInteger ||
        reversedNumber > maximumInteger
    ) {
        return 0;
    }

    // return the final reversed number
    return reversedNumber;
}