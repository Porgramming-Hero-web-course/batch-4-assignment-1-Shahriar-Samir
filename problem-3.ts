{
    // A function that takes string as argument and count word occurrences 
    const countWordOccurrences = (sentence:string,word:string):number=>{
            const wordOccurrences = sentence.toLowerCase().replace(/[,.!]/g,'').split(' ').filter(wordItem=> wordItem===word.toLowerCase())
            // return count of word occurrences
            return wordOccurrences.length
    }
   
}