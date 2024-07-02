//Primitive 7 types
//String,Number,Boolean,null,undefined,Symbol,BigInt

// Javascript is statically or dynamically defiine


//about symbol
// const id=Symbol("123")
// const aid=Symbol('123')
// console.log(id==aid)
// console.log(id)
// console.log(aid)




// BigInt
// const bigint=345679894945849749n


//Reference type also called non primitive
//Array,Objects,Functions

//array    its datatype is object
const heros=["hello","sharma"]


//object
// let myobj={
//     name:"avani",age:22
// }

//function    its datatype is function (object function)
const myfunc=function()   //function in form of variable
{
    console.log("hello world")
}
console.log(typeof myfunc)

//find datatype of any variable can use typeof() function


//.............................................


//stack(primitive)      heap(non primitive)



let myyou="avantika"
let b=myyou
 b="sleep"
console.log(myyou)
console.log(b)


//changes done in copy only in case of stack memory 


let userone={
    email:"avani007sharma@gmail.com",
    upi:"userone"
}

let usertwo=userone
usertwo.email="avani"

console.log(userone.email)
console.log(usertwo.email)


//changes done in both in case of heap memory 



