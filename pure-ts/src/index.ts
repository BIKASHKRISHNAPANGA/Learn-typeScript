class user {
    email:string;
    name:string;
    _couseCount:number=10
     private city:string=""
    constructor(email:string,name:string){
        this.email = email;
        this.name = name;
        this.city="nagpur"//this works becaouse of inheritance 
    }
    get gwtAppleEmail():string{
        return`apple${this.email }`
    }
    get courseCount():number{
        return this._couseCount??0
    }
}

const bik=new user("bik@gmail.com","bikash panga")
console.log("dfghjghj")
// bik.city="kanpur" camt use beacuse city is private

class User {
    private _age: number = 18;

    get age(): number {//to get valuss ,not only private and also publict
        return this._age;
    }

    set age(newAge: number) {//to set valuss ,not only private and also publict it not return type
        if (newAge < 0) {
            throw new Error("Age cannot be negative");
        }
        this._age = newAge;
    }
}

const er = new User();
console.log(er.age); // Output: 18 (Getter called)

er.age = 25; // ✅ Setter called
console.log(er.age); // Output: 25

// user.age = -5; ❌ Throws error: Age cannot be negative

class subUser extends User{ //provides all funtion from users but not private one
isFamily:boolean=true;
changeCourceCount(){
    // this._couseCount=10; not possibale of private
}
}
