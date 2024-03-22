export function isIsogram(str) {
    for (let i = 0; i < str.length; i++) {

        const strNoCase = str.toLowerCase();

        for (let j = i + 1; j < str.length; j++) {
            if (strNoCase.charAt(i) == strNoCase.charAt(j)) {
                return false;
            }
        }
    }
    return true;
}