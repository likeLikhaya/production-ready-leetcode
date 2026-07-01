function groupAnagrams(strs: string[]): string[][] {

    // stores all grouped anagrams
    const groupedAnagrams: Record<string, string[]> = {};

    // loop through every word in the array
    for (const currentWord of strs) {

        // sort the characters in the word to create a unique anagram key
        const sortedWord = currentWord
            .split("")
            .sort()
            .join("");

        // create an empty array if the anagram group does not exist yet
        if (!groupedAnagrams[sortedWord]) {
            groupedAnagrams[sortedWord] = [];
        }

        // add the current word to its matching anagram group
        groupedAnagrams[sortedWord].push(currentWord);
    }

    // return all grouped anagrams as an array
    return Object.values(groupedAnagrams);
}