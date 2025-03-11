const score: Array<number> = []
const names:Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any):any{
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}
//the input type and return type is same 
// identityThree(true)

function identityFour<T>(val: T): T {
    return val
}

interface Bootle{
    brand: string,
    type: number
}

// identityFour<Bootle>({})

function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}


const getMoreSearchProducts = <T,>(products: T[]): T => {
    //do some database operations
    const myIndex = 4
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}

// anotherFunction(3, {})

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}

//In class Sellable<T>, <T> is a generic type parameter, meaning the class can work with any data type.

// When an object of Sellable is created, T will be replaced by a specific type.
// This makes the class reusable and type-safe.
// ex const bookStore = new Sellable<Book>(); // T is replaced with Book type
// const toyStore = new Sellable<Toy>();   // T is replaced with Toy type


// product: T means that product must be of type T (whatever type was specified when creating the object).
// It does not get properties from public cart: T[] = [].
// T[] just means "an array of T".
// product is a single element of type T.