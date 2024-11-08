{
    // circle shape type
    type CircleType = {
        shape:'circle',
        radius:number
    }

    // rectangle shape type
    type RectangleType = {
        shape:'rectangle',
        width:number,
        height:number
    }

    // calculate area of the shape function
    const calculateShapeArea = (shapeData:CircleType|RectangleType):number=>{

        // if the shape is circle
        if(shapeData.shape === 'circle'){
            return parseFloat((Math.PI * (shapeData.radius*shapeData.radius)).toFixed(2))
        }

        // if the shape is rectangle
        if( shapeData.shape === 'rectangle'){
            return shapeData.width * shapeData.height
        }

        // if the shape is undefined
        else{
            return 0
        }
    }

  
    
}