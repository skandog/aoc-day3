

const puzzleInput: any = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

let puzzleInputArr: any = puzzleInput.split('\n')

let dupes: string[] = [];

function charInCommon(a, b){
    // if( b.length < a.length )
    //     return charInCommon(b, a)

    for( var i = 0, len = a.length; i < len; i++ ) 
        if(b.indexOf(a[i]) != -1)
            return (a[i]);
  
    return false
}



const key = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    const lower = caps.map(letter => letter.toLowerCase())
    return lower.concat(caps);
  })();

  function wordScore(word) {
    let score = 0;
    for (let j = 0; j < word.length; j++) {
      let char = word[j];
      score += (key.indexOf(char) + 1);
    }
    return score;
  }


  console.log(wordScore('A'))
for ( let i = 0; i < puzzleInputArr.length; i++) {
    let stringLength: number = puzzleInputArr[i].length
    let left: any = puzzleInputArr[i].slice(0, stringLength/2)
    let right: any = puzzleInputArr[i].slice(stringLength/2, stringLength)
    //console.log('left :>> ', left);
    //console.log('right :>> ', right);
     console.log(charInCommon(left, right))
}

// console.log(puzzleInputArr);