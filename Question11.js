function VowelCalculatorRevamp(sentence){
    let CountA = 0;
    let CountE = 0;
    let CountI = 0;
    let CountO = 0;
    let CountU = 0;

    for(let inc = 0; inc < sentence.length; inc++){
        if(sentence[inc].toLowerCase() == 'a'){
            CountA++;
        } else if(sentence[inc].toLowerCase() == 'e'){
            CountE++;
        } else if(sentence[inc].toLowerCase() == 'i'){
            CountI++;
        } else if(sentence[inc].toLowerCase() == 'o'){
            CountO++;
        } else if(sentence[inc].toLowerCase() == 'u'){
            CountU++;
        } 
    }

    const Vowels = {
        a: CountA,
        e: CountE,
        i: CountI,
        o: CountO,
        u: CountU
    }

    return Vowels;
}

VowelCalculatorRevamp('Beautiful day at the zoo');
console.log(VowelCalculatorRevamp('Beautiful day at the zoo'))