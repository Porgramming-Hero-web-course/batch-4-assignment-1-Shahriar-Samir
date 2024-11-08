{
    // Car class with getCarAge method
    class Car{
  
        // constructor function
        constructor(public make:string,public model:string,public year:number){
            this.make = make
            this.model = model
            this.year = year
        }
        
        // getCarAge method
        getCarAge(){
            return 2024-this.year
        }
    }


    
}