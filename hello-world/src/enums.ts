// const AILE=0
// const MIDDEL=1
// const WINDOW=2

 //alternet
 enum SeatChoice1{
    AILE1,
    MIDDEL1,
    WINDOW1,
    FOURTH1
}
console.log(SeatChoice1)//her intex start from 0
enum SeatChoice{
    AILE=10,
    MIDDEL,
    WINDOW,
    FOURTH
}
console.log(SeatChoice)
const hcSeat=SeatChoice.AILE//here index start from the number you gave

enum SeatChoice2{
    AILE="ertyu",
    MIDDEL=4,
    WINDOW=67,
    FOURTH='jk'
}
console.log(SeatChoice2)

const enum SeatChoice3{
    AILE="ertfd3yu",
    MIDDEL=454,
    WINDOW=67,
    FOURTH='jk'
}//A const enum in TypeScript is a special kind of enum that gets completely removed during compilation. Instead of creating an object at runtime, TypeScript directly inlines the enum values.


console.log(SeatChoice3.MIDDEL)//it will work like a normal enum but it will not create an object at runtime
// console.log(SeatChoice3)//it will not work because it is a const enum
