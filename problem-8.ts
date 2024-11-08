{
    const validateKeys = <T>(obj:T,arr:(keyof T)[]):boolean=>{
        for(let key of arr){
            if(!obj[key]){
                console.log(obj[key])
                return false
            }
        }
        return true
    }

}