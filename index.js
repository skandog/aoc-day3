var puzzleInput = "vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg\nwMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\nttgJtRGJQctTZtZT\nCrZsJsPPZsGzwwsLwLmpwMDw";
var puzzleInputArr = puzzleInput.split('\n');
for (var i = 0; i < puzzleInputArr.length; i++) {
    var stringLength = puzzleInputArr[i].length;
    var left = puzzleInputArr[i].slice(0, stringLength / 2);
    var right = puzzleInputArr[i].slice(stringLength / 2, stringLength);
    console.log('left :>> ', left);
    console.log('right :>> ', right);
}
// console.log(puzzleInputArr);
