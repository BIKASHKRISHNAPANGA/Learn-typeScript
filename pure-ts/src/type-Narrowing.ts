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

function PrintAll(strs:string|string[]|null){
    if(strs){
        if(Array.isArray(strs)){
            console.log("its array and it has")
            strs.forEach(element => {console.log(element)})
        }
        else if(typeof strs==="string"){
            console.log(strs+"is a string")
        }
    }
}


interface user{
    name: string;
    age: number;
    email:string
}

interface admin{
    name: string;
    isAdmin:boolean
}

function isAdmin(account :user|admin){
if("isAdmin" in account && account.isAdmin){
console.log(account.name+"has a accaount")
}else {
    console.log(account.name + " is a regular user");
}
}

// its just narrowing the type to use it properly


type Fish={swim:()=>void}
type animal={run:()=>void}
 function isFish(pet: Fish|animal){
    return(pet as Fish).swim!==undefined//here its output in boolen ,may defined or undefind 
 }

 function getPet(pet:Fish|animal){
    if(isFish(pet)){
        return"fish food"
    }
    else{
        return"dog food"
    }
 }


 interface circle{
    kind:"circle",
    radius: number
 }
 interface square{
    kind:"square",
    side: number
 }
interface Rectangle{
    kind:"rectangle",
    width: number,
    length: number
}
type shape =circle|square|Rectangle
function gettrueShape(shape:shape){
    if(shape.kind==="circle")
        return Math.PI*shape.radius**2
    else if(shape.kind==="square")
        return shape.side**2
    else
    return shape.width*shape.length
}

//or use switch

function getArea(shape:shape){
    switch(shape.kind){
    case "circle":
        return Math.PI*shape.radius**2
        break
        case "square":
            return shape.side**2
            break
            case "rectangle":
            return shape.width*shape.length
            break

            default:
            return "dedo bhai kuch value"
}}