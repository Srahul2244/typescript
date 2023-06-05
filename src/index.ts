// object function

interface Person {
    firstname: string,
    lastname: string,
}

function printName({ firstname, lastname }: Person): string {
    return firstname + " " + lastname
}

console.log({ firstname: "masai" })

// Union type if we want to use multiple than we can we use union 

let userType: "super-admin" | "admin" | "user"

let value: number | string | boolean | null

let arr1: (string | boolean)[] = ['Bangalore', true]

// type

type RequestLoading = {
    state: "loading"
}

type RequestFailure = {
    state: "failed",
    code: number
}

type networkState = RequestLoading | RequestFailure;

// Intersection type we  can use with and operation 


interface ErrorInterface {
    status: boolean;
    error: {
        message: string
    }
}

interface citydata {
    cityname: { title: string }
}

type response = ErrorInterface & citydata

let res: response = {
    status: true,
    cityname: {
        title: "Bangalore"
    }
}


// boolean

let isbool: boolean = true;
isbool = false;

// string

let first_name: string = "Masai"
let last_name: string = 'School';

// array

let arr: number[] = [1, 2, 3, 4]
let arrOfString: string[] = ["a", "b", "c"]
let arrOfNumber: Array<Number> = [1, 2, 3, 4]


// objects

// shape of the object ->create interface

// interface company {
//     name: string,
//     age: number
// }

const masai: company = {
    name: "masai",
    age: 2
}

// primitive types in typescript ->number,string ,boolean, null,undefined  symbol and bigint


type company = {
    name: string,
    age: number,
    rank?: number
}
type profession = {
    role: string,
    salary: number
}

let arrOfObj: company[] = [{ name: 'Bangalore', age: 1, rank: 2 }]


// tuples
// the number of initial element in the tuple are fixed
// the types of those initial elements should be known in advance


let masai_details: [string, number] = ['Masai', 1]


// enum =>way to group together a set of named constants
enum color {
    red,
    green,
    blue,
}
// console.log(color)

enum books {
    get_books_request = "get_boooks_request",
    get_books_sucess = "get_boooks_sucess",
    get_books_failure = "get_boooks_failure"
}


//  any keyword
// u=undefined
// n=null
// a:any

function sum(a: number, b: number): number {
    return a + b
}

console.log(sum(2, 3))


// here this function return nothing soo we can write here void
function masa({ name, age }: company): void {
    console.log(name + "" + age)
}
masa(masai)

// intersection 

let masaischool: (company & profession)[] = [{
    name: "rahul",
    age: 20,
    role: "web developer",
    salary: 2000000
}]