abstract class takePhoto{//cant create objects of ther own
    constructor(
        public camera: string,
        public filter:string
    ){

    }

    abstract getSepia(): void;
        getReelTime():Number{
            //some complex calculation
            return 8
        }
    
}

class Instagrams extends takePhoto{
    constructor(
   public camera: string,
   public filter: string,
   public burst:number
    )
{
super(camera,filter)
}
getSepia():void{
console.log("sepia")
}
}


//

abstract class Animal {
    abstract makeSound(): void; // Must be implemented by subclasses
    move(): void {
      console.log("Animal is moving");
    }
  }
  
  class Dog extends Animal {
    makeSound(): void {
      console.log("Bark!");
    }
  }
  
  const myDog = new Dog();
  myDog.makeSound(); // Bark!
  myDog.move(); // Animal is moving
  

  