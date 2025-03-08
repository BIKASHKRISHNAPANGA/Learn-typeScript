
interface apple{
    readonly dbId:number,
    email:string,
    userId:number
    googleId?:string//option to get value or not
    startTrial:()=>string
    //or
    startTrial1():string,
    getCoupon(couponName:string,value:number):number
}
interface apple{
    githutToken:string|number
}
interface kk{
    h:string,
}
interface admin extends apple,kk{//use inline nun-35 , 2 or more to extends
    papa:string,
    mom:string
}
const bikash:apple={dbId:456,email:"ghjkl",userId:4567890,
    startTrial:()=>"trial started",//funtion returning a string
    startTrial1() {
        return "trial started";
    },
    getCoupon:(name:"bikash",v1:89)=>{//ther no necessary to mathch the name with the function name
        return 10
    },
    githutToken:32
}

bikash.email="kkksh"
// bikash.dbId=56789 not possible because its readonly


const bikash1:admin={dbId:456,email:"ghjkl",userId:4567890,
    startTrial:()=>"trial started",//funtion returning a string
    startTrial1() {
        return "trial started";
    },
    getCoupon:(name:"bikash",v1:89)=>{//ther no necessary to mathch the name with the function name
        return 10
    },
    githutToken:32,
    papa:"ertyui",
    mom:"iuoiu",
    h:"ghjk"
}
