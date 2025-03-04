
interface apple{
    readonly dbId:number,
    email:string,
    userId:number
    googleId?:string//option to get value or not
    startTrial:()=>string
}
const bikash:apple={dbId:456,email:"ghjkl",userId:4567890,
    startTrial:()=>"trial started"
}

bikash.email="kkksh"
// bikash.dbId=56789 not possible because its readonly