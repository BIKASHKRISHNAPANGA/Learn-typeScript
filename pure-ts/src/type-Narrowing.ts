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