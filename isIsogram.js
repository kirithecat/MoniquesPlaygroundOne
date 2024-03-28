export function isIsogram(str) {
    for (let initialLetter = 0; initialLetter < str.length; initialLetter++) {
        const strNoCase = str.toLowerCase();

        for (let comparedLetter = initialLetter + 1; comparedLetter < str.length; comparedLetter++) {
            if (strNoCase.charAt(initialLetter) === strNoCase.charAt(comparedLetter)) {
                return false;
            }
        }
    }
    return true;
}