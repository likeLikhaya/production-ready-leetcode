function isValid(s: string): boolean {
    // store opening brackets
    const stack: string[] = [];

    // matching pairs
    const pairs: Record<string, string> = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    // loop through each character
    for (let i = 0; i < s.length; i++) {
        const current = s[i];

        // if opening bracket add it to the stack
        if (current === "(" || current === "[" || current === "{") {
            stack.push(current);
        } else {
            // remove the last opening bracket
            const last = stack.pop();

            // if brackets don't match return false
            if (last !== pairs[current]) {
                return false;
            }
        }
    }

    // valid if there are no unmatched brackets left
    return stack.length === 0;
}