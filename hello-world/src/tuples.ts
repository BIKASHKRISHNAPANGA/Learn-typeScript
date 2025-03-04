// export const user:(string|number)[]=["hs",1]
export let user:[string,number,boolean]

user=["stt",3,false]
// user=[3,false,'ds'] not possible because its aasingned like that

type tuser=[number,string]

let k:tuser
k=[1,'ds'] // this is possible because of the order of the types in the type
//tuples are arrayes which are typed and ordered

let r:[number,number,number]
r=[1,2,3]
r.push(789)
// console.log(r[3]) not posssible bout
console.log(r)//possible out put [1,2,3,789] this loop hole of tuple