//DATES     is object


//month start with 0 in js

let mydate=new Date()
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())


// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())

// console.log(mydate.toUTCString())


let mycreateddate=new Date(2023,07,06)
// console.log(mycreateddate.toDateString())

// let date=new Date(2023,07,06,5,4)   //INDICATE DATE AND TIME 
// console.log(date.toLocaleString())

// let date=new Date("2023-01-14")     //NOT USE INDEXING CONCEPT    //YYYY-MM-DD
// console.log(date.toLocaleString())



let date=new Date("01-14-2023")      //MM-DD-YYYY
// console.log(date.toLocaleString())


// ..............................TIMESTAMP..................................................................

let timestamp=Date.now()
// console.log(timestamp)
// console.log(date.getTime())    //used to compare 
// console.log(Math.floor(Date.now()/1000))   //convert to sec


let newdate=new Date()
// console.log(newdate.getDate())
// console.log(newdate.getDay())
// console.log(newdate.getMonth())
// console.log(newdate.getUTCDate())


console.log(newdate.toLocaleString('default',{
        weekday:"long"
}))     //as per my customized form 


