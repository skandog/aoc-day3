

const puzzleInput: any = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

let puzzleInputArr: any = puzzleInput.split('\n')

for ( let i = 0; i < puzzleInputArr.length; i++) {
    let stringLength: number = puzzleInputArr[i].length
    let left: any = puzzleInputArr[i].slice(0, stringLength/2)
    let right: any = puzzleInputArr[i].slice(stringLength/2, stringLength)
    console.log('left :>> ', left);
    console.log('right :>> ', right);
}

// console.log(puzzleInputArr);