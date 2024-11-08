{
    // interface of profile
    interface profileType{
        name:string,
        age:number,
        email:string
    }


    const updateProfile = (profile:profileType,updateData:{[key in keyof profileType]?:profileType[key]}):profileType=>{
            return {...profile,...updateData}
    }

}