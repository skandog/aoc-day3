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
var puzzleInputArr = puzzleInput.split('\n');
var dupes = [];
function charInCommon(a, b) {
    // if( b.length < a.length )
    //     return charInCommon(b, a)
    for (var i = 0, len = a.length; i < len; i++)
        if (b.indexOf(a[i]) != -1)
            return (a[i]);
    return false;
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
console.log(wordScore('A'));
for (var i = 0; i < puzzleInputArr.length; i++) {
    var stringLength = puzzleInputArr[i].length;
    var left = puzzleInputArr[i].slice(0, stringLength / 2);
    var right = puzzleInputArr[i].slice(stringLength / 2, stringLength);
    //console.log('left :>> ', left);
    //console.log('right :>> ', right);
    console.log(charInCommon(left, right));
}
// console.log(puzzleInputArr);
