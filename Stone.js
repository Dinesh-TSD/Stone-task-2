const countFrogsBetweenStones = (s, startIndex, endIndex) => {
    const prefixFrogs = Array(s.length + 1).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        prefixFrogs[i + 1] = prefixFrogs[i] + (s[i] === '*' ? 1 : 0);
    }

    return startIndex.map((start, i) => {
        const end = endIndex[i];
        const subStr = s.slice(start - 1, end);
        const leftStone = subStr.indexOf('|');
        const rightStone = subStr.lastIndexOf('|');
        
        return (leftStone !== -1 && rightStone !== -1 && leftStone < rightStone)
            ? subStr.slice(leftStone + 1, rightStone).split('*').length - 1
            : 0;
    });
};

const s = "*|*|";
const startIndex = [1];
const endIndex = [3];

console.log(countFrogsBetweenStones(s, startIndex, endIndex));
