{
    // Remove duplicates function that takes array of number as argument
    const removeDuplicates = (arr:number[]):number[]=>{
        // returns a new array with duplicates removed
        return arr.filter((num,index)=> index===arr.indexOf(num))
    }
}