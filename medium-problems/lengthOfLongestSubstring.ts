function lengthOfLongestSubstring(s: string): number {
    
    // this keeps track of where the current window starts
    let left = 0;

    // stores the length of the longest valid substring found so far
    let maxLen = 0;

    // stores each character and the last index where it was seen
    const map = new Map<string, number>();

    // move through the string one character at a time
    for (let right = 0; right < s.length; right++) {

        // get the current character at the right pointer
        const char = s[right];

        // check if the character already exists in the map
        if (map.has(char)) {

            // move the left pointer to the right of the previous duplicate
            // Math.max stops left from moving backwards
            left = Math.max(left, map.get(char)! + 1);
        }

        // store the current character and its index
        map.set(char, right);

        // calculate the current window length
        // then compare it with the biggest substring found so far
        maxLen = Math.max(maxLen, right - left + 1);
    }

    // return the longest substring length found
    return maxLen;
}