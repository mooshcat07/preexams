function VowelCalculater(sentence){
    let vowelcount = 0;

    for(let increment = 0; increment < sentence.length; increment++){

        if(sentence[increment].toLowerCase() == 'a' || sentence[increment].toLowerCase() == 'e' || sentence[increment].toLowerCase() == 'i' || sentence[increment].toLowerCase() == 'o' || sentence[increment].toLowerCase() == 'u'){
            vowelcount++;
        }
        else{
            continue;
        }
    }

    console.log(vowelcount + ' Vowels');
}

VowelCalculater('Akuzike');