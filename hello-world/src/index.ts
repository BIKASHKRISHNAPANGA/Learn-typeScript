let age : number=20;
let a:string="bikash"
console.log(a+" "+age);
if(age<50){
    age +=10;
}
console.log(a+" "+age);
 function addTwo(num:number){
return num+2
 }

  function getUpper(val:string){
    return val.toUpperCase();
  }
 console.log(addTwo(5),getUpper("apppa"))

 let loginUser=(name:string, email:string, isPaid:boolean=false):number=>{return 55}

 console.log(  loginUser("hhhh","hjhjhdd"))


function getValue(myVal:number){
    if(myVal>5){
        return myVal*2
    }
    else{
        return "200 OK"
    }
}

function consoleError(errmsg:string):void{
    console.error(errmsg)
}//rule to follow we have to specify

function handleError(errmsg:string):never{
    throw new Error(errmsg)
}//rule to follow , not diff in void nad never practicaly


const user={
    name:"bikash",
    email:"pangsbikashkrishna@gmail.com",
    isActive:true
}

type User1 = {
    name: string;
    isPaid: boolean;
  };
// function createUser({name:string,isPaid:boolean}){}
function createUser({name,isPaid}:User1){}//this is the correct way to do it

createUser({name:"bikash",isPaid:false})

function createCource():{name:string,price:number}{
    return {name:"bikash",price:1000}
}//this way you can return a object



type us={
    name:string;
    email:string;
    isActive:boolean;
}

let b={
    name:"bikash",
    age:25,
    email:"pangsbikashkrishna@gmail.com",
}


function createus(u:us):us{
console.log(u)
return u
}

createus({name:"",email:"",isActive:true})


type ab={
    readonly id:string;
    name:string;
    email:string;
    isActive:boolean;
    credtcradDetails?:number;//this ? represents optional information
}

let myAb:ab={
    id:"adbs",
    name:"bikash", 
    email:"@gmail.com",
    isActive:true,
    //credtcradDetails:1000//this is optional information
}

myAb.name="pratyush"
// myAb.id="hoioo"not work becouse its is readonly

let k=(info:ab):ab=>{

    return info
}
console.log(k(myAb))

type kan=us&ab&{
    app:boolean;
}
//with this we can add property of other objects to the type

// Type 'string' is not assignable to type 'never'.
//If us and ab had different types for name, TypeScript would throw an error instead of merging them.

//arryes

