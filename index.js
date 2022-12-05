var puzzleInput = "vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg\nwMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\nttgJtRGJQctTZtZT\nCrZsJsPPZsGzwwsLwLmpwMDw";
var puzzleInputArr = puzzleInput.split('\n');
var dupes = [];
function anythingInCommon(a, b) {
    // if( b.length < a.length )
    //     return anythingInCommon(b, a)
    for (var i = 0, len = a.length; i < len; i++)
        if (b.indexOf(a[i]) != -1)
            return (a[i]);
    return false;
}
for (var i = 0; i < puzzleInputArr.length; i++) {
    var stringLength = puzzleInputArr[i].length;
    var left = puzzleInputArr[i].slice(0, stringLength / 2);
    var right = puzzleInputArr[i].slice(stringLength / 2, stringLength);
    //console.log('left :>> ', left);
    //console.log('right :>> ', right);
    console.log(anythingInCommon(left, right));
}
// console.log(puzzleInputArr);
