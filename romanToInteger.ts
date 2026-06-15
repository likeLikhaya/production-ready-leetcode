function romanToInt(s: string): number {
    // values for each roman symbol
    const values: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    // start total at 0
    let total = 0;

    // loop through the roman string
    for (let i = 0; i < s.length; i++) {
        // get current symbol and the next symbol
        const currentSymbol = s[i];
        const nextSymbol = s[i + 1];

        // get the values for both symbols
        const currentValue = values[currentSymbol];
        const nextValue = values[nextSymbol];

        // if current value is less than next value, subtract it
        if (currentValue < nextValue) {
            total -= currentValue;
        } else {
            // otherwise add it to the total
            total += currentValue;
        }
    }

    // return the final total
    return total;
}