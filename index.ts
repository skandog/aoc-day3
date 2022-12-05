

const puzzleInput: any = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

let puzzleInputArr: any = puzzleInput.split('\n')

let dupes: string[] = [];

function anythingInCommon(a, b){
    // if( b.length < a.length )
    //     return anythingInCommon(b, a)

    for( var i = 0, len = a.length; i < len; i++ ) 
        if(b.indexOf(a[i]) != -1)
            return (a[i]);
  
    return false
}

for ( let i = 0; i < puzzleInputArr.length; i++) {
    let stringLength: number = puzzleInputArr[i].length
    let left: any = puzzleInputArr[i].slice(0, stringLength/2)
    let right: any = puzzleInputArr[i].slice(stringLength/2, stringLength)
    //console.log('left :>> ', left);
    //console.log('right :>> ', right);
     console.log(anythingInCommon(left, right))
}

// console.log(puzzleInputArr);