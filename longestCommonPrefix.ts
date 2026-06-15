function longestCommonPrefix(strs: string[]): string {
 // if array is empty return empty string
    if (strs.length === 0) {
        return "";
    }

    // start with the first word as the prefix
    let prefix = strs[0];

    // loop through the rest of the words
    for (let i = 1; i < strs.length; i++) {
        // keep shortening the prefix until it matches the start of the current word
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
        }
    }

    // return the common prefix
    return prefix;
}