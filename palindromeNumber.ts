function isPalindrome(x: number): boolean {
    // convert number into a string to work with each character
    const string = x.toString();
    // storing reversed version into a string
    let reversed = '';
    // moving backwards from the last character in the string
    for (let i = string.length - 1; i >= 0; i--){
        // add the current character to the reversed string
        reversed += string[i];
    }
    // check if the reversed string matches the original string
      if (reversed === string){
            return true;
        } else {
            return false
        }
};