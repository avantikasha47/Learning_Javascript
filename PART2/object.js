//two way to declear literal(no singleton) or constrcutor 
//singleton way 


//object literals


const mysym=Symbol("key1")
const jsuser={
    name:"avni",
    age:18,
    location:"jaipur",
    email:"avni@gmail.com",
    isloggedin:false,
    lastlogin:["mon","tues"]  ,
    "full name":"avantika sharma" ,
    [mysym]:"mykey1"
}


//access
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"]) //only way

// console.log( jsuser[mysym])    //get string but want symbol


jsuser.email="sharma@gmail.com"  //can change value overwrite  it 


// Object.freeze(jsuser)
jsuser.email="avantika@gmail.com"  //not change
// console.log(jsuser.email)
jsuser.greeting=function(){
    console.log("hello")
}
// console.log(jsuser.greeting)  //undefined
// console.log(jsuser.greeting())  //not a function error

jsuser.greetingtwo=function(){
    console.log(`hello,${this.name}`) //add name 
}
// console.log(jsuser.greetingtwo())







