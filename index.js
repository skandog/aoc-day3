// import puzzleInput from './input.js'
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var puzzleInput = "vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg\nwMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\nttgJtRGJQctTZtZT\nCrZsJsPPZsGzwwsLwLmpwMDw";
console.log(puzzleInput);
var puzzleInputArr = puzzleInput.split('\n');
var badgeInputArr = [];
for (var i = 0; 3 * i < puzzleInputArr.length; i++) {
    badgeInputArr[i] = [];
    badgeInputArr[i].push(puzzleInputArr[3 * i]);
    badgeInputArr[i].push(puzzleInputArr[(3 * i) + 1]);
    badgeInputArr[i].push(puzzleInputArr[(3 * i) + 2]);
}
console.log(badgeInputArr);
var dupes = [];
function charInCommon(a, b) {
    for (var i = 0, len = a.length; i < len; i++)
        if (b.indexOf(a[i]) != -1)
            return (a[i]);
}
function charInCommonThree(a, b, c) {
    for (var i = 0, len = a.length; i < len; i++)
        if (b.indexOf(a[i]) != -1 && c.indexOf(a[i]) != -1)
            return (a[i]);
}
var key = (function () {
    var caps = __spreadArray([], Array(26), true).map(function (val, i) { return String.fromCharCode(i + 65); });
    var lower = caps.map(function (letter) { return letter.toLowerCase(); });
    return lower.concat(caps);
})();
function wordScore(word) {
    var score = 0;
    for (var j = 0; j < word.length; j++) {
        var char = word[j];
        score += (key.indexOf(char) + 1);
    }
    return score;
}
var total = 0;
for (var i = 0; i < badgeInputArr.length; i++) {
    var elf0 = badgeInputArr[i][0];
    var elf1 = badgeInputArr[i][1];
    var elf2 = badgeInputArr[i][2];
    var commonCharacter = charInCommonThree(elf0, elf1, elf2);
    total += wordScore(commonCharacter);
    console.log(commonCharacter);
}
console.log(total);
// // Used for part 1
// for ( let i = 0; i < puzzleInputArr.length; i++) {
//     let stringLength: number = puzzleInputArr[i].length
//     let left: any = puzzleInputArr[i].slice(0, stringLength/2)
//     let right: any = puzzleInputArr[i].slice(stringLength/2, stringLength)
//     //console.log('left :>> ', left);
//     //console.log('right :>> ', right);
//      //console.log(charInCommon(left, right))
//     let commonCharacter: string = charInCommon(left, right)
//      total += wordScore(commonCharacter)
// }
//  console.log(total);
