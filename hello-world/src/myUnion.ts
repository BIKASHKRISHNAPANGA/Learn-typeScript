let score:number|string=33
score=44
score="55"
//creting of 2 datatypes called union datatype

export type user={
    name:string,
    id:number
}
type admin={
    userName:string;
    id:number;
}
let bik:user|admin={
    name:"bikram",
    userName:"",
    id:1,
}

function getDbId(id:number|string){
    // id.toLowerCase() cant do it because of union type
    if (typeof id === 'string') {
        id.toLowerCase()
    }
}

const data:number[]=[1,2,3]
const data1:string[]=["1","2","3"]
// const data2:number|string[]=[1,2,3] wrong syntax
const data2:(number|string)[]=[1,2,3,"4","6"]


let seatAllotment:"aisle"|"midlde"|"window"
seatAllotment="aisle"
// seatAllotment="dfcds" cant be possible