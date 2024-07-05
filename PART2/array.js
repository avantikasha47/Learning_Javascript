//array    indexfrom 0      form shallow copy 

const myarr=[0,1,2,3,4,5,true,"avni"]
// console.log(myarr[5]) //fetch element

//methods

myarr.push(6)     //to append at last
// console.log(myarr)

myarr.pop()    //remove last value
// console.log(myarr)


myarr.unshift(1)  //add element in start but time consuming 
// console.log(myarr)


myarr.shift()     //remove value from start
// console.log(myarr)


// console.log(myarr.includes(6))
// console.log(myarr.indexOf(8))     //not exist give index -1
const  newarr=myarr.join()
// console.log(typeof myarr)
// console.log(typeof newarr)   //convert to string and bind 




//slice,splice(slice:orginal same and new have range upto )(splice:orginal array contact left elements and new array with range+1)

console.log("A ",myarr);    //orignal array
const myn1=myarr.slice(1,3)
console.log(myn1)
console.log("B",myarr);   //after slice used

const myn2=myarr.splice(1,3)
console.log(myn2)  
console.log("c ",myarr);            //after splice used      