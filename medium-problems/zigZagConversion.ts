function convert(s: string, numRows: number): string {

    // if there is only one row,
    // or the string is shorter than the number of rows,
    // zigzag conversion is not needed
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    // create an empty string for each row
    const rows = new Array(numRows).fill("");

    // keeps track of the current row
    let currentRow = 0;

   // controlling the direction of movement
    let direction = 1;

    // loop through every character in the string
    for (const character of s) {

        // add current character to the current row
        rows[currentRow] = rows[currentRow] + character;

        // move downward when top is reached
        if (currentRow === 0) {
            direction = 1;
        }

       // move upward when the bottom row is reached
        if (currentRow === numRows - 1) {
            direction = -1;
        }

        // move to the next row
        currentRow += direction;
    }

    // combine all rows into one final string
    return rows.join("");
}