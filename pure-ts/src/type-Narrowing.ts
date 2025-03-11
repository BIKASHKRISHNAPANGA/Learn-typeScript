function detectType(val:string|number){
    if (typeof val === 'string') {
       return val.toLowerCase() 
    }
    return val+4
}

function provideId(id:string| null){
    if(!id){
        console.log("please provide Id");

    }
    id?.toLowerCase()
}