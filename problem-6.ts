{
    // interface of profile
    interface profileType{
        name:string,
        age:number,
        email:string
    }

    // a function that returns an object with updated values
    const updateProfile = (profile:profileType,updateData:{[key in keyof profileType]?:profileType[key]}):profileType=>{
            return {...profile,...updateData}
    }

}