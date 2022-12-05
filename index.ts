// import puzzleInput from './input.js'

const puzzleInput: any = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

console.log(puzzleInput)

let puzzleInputArr: any = puzzleInput.split('\n')

let badgeInputArr: any = []

for (let i = 0; 3 * i < puzzleInputArr.length; i++) {
    badgeInputArr[i] = []
    badgeInputArr[i].push( puzzleInputArr[3 * i])
    badgeInputArr[i].push(puzzleInputArr[(3 * i) + 1])
    badgeInputArr[i].push(puzzleInputArr[(3 * i) + 2])
}

console.log(badgeInputArr);

let dupes: string[] = [];

function charInCommon(a: string, b: string){

    for( var i = 0, len = a.length; i < len; i++ ) 
        if(b.indexOf(a[i]) != -1)
            return (a[i]);
  
}

function charInCommonThree(a: string, b: string, c: string){

    for( var i = 0, len = a.length; i < len; i++ ) 
        if(b.indexOf(a[i]) != -1 && c.indexOf(a[i]) != -1)
            return (a[i]);
  
}


const key = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    const lower = caps.map(letter => letter.toLowerCase())
    return lower.concat(caps);
  })();


function wordScore(word: string): number {
    let score = 0;
    for (let j = 0; j < word.length; j++) {
      let char = word[j];
      score += (key.indexOf(char) + 1);
    }
    return score;
}

let total: number = 0;

for (let i = 0; i < badgeInputArr.length; i++) {
    let elf0 = badgeInputArr[i][0]
    let elf1 = badgeInputArr[i][1]
    let elf2 = badgeInputArr[i][2]
   let commonCharacter = charInCommonThree(elf0, elf1, elf2)
   total += wordScore(commonCharacter)
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