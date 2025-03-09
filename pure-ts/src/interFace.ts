interface takePhoto1{
    cameraMode:string,
    filter:string,
    burst:number
}

class Instagram implements takePhoto1{
    
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        
    }
}

class YouTube implements takePhoto1{
    constructor(
  public cameraMode:string,
  public filter:string,
    public burst: number,
    ){}
    craeteStory():void{
        console.log("hhjkl")
    }
}

///

interface Person {
    name: string;
    age: number;
    greet(): string;
  }
  
  class Student implements Person {
    constructor(public name: string, public age: number) {}
  
    greet(): string {
      return `Hello, I am ${this.name}`;
    }
  }
  
  const student1 = new Student("Bikash", 22);
  console.log(student1.greet()); // Hello, I am Bikash
  
