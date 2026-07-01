function intToRoman(num: number): string {

    // stores the final roman numeral
    let romanNumeral = "";

    // stores all roman numeral values from largest to smallest
    const romanValues = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" },
    ];

    // loop through every roman numeral value
    for (const romanValue of romanValues) {

        // keep adding the roman numeral symbol
        // while the number is greater than or equal to the value
        while (num >= romanValue.value) {

            // add the symbol to the final result
            romanNumeral += romanValue.symbol;

            // subtract the value from the number
            num -= romanValue.value;
        }
    }

    // return the completed roman numeral
    return romanNumeral;
}