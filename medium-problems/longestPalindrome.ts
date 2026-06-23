function longestPalindrome(s: string): string {

    // this stores the longest palindrome found so far
    let longest = "";

    // loop through every possible starting position in the string
    for (let i = 0; i < s.length; i++) {

        // loop through every possible ending position
        for (let j = i; j < s.length; j++) {

            // get the current substring from index i to j
            const substring = s.substring(i, j + 1);

            // reverse the current substring
            const reversed = substring.split("").reverse().join("");

            // check if the substring is the same forwards and backwards
            if (substring === reversed) {

                // if the current palindrome is longer than the previous one
                // then update longest
                if (substring.length > longest.length) {
                    longest = substring;
                }
            }
        }
    }

    // return the longest palindrome found
    return longest;
}