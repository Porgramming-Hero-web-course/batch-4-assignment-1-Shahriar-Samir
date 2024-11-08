{
    // A function that returns property value
    const getProperty = <T,Y extends keyof T>(obj:T,key:Y):T[Y]=>{
        // return property value
        return obj[key]
    }

}