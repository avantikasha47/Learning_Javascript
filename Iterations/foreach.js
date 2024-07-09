//foreach loop best for array



const coding=["js","ruby","java","python"]

//for each k undr function do without name and any variable
// coding.forEach( function (item) {
//     console.log(item);

// })


// coding.forEach( (val)=>{
//     console.log(val);

// })


// function printme(item)
// {
//     console.log(item);
// }


// coding.forEach(printme)



// coding.forEach( (item,index,array)=>{
//     console.log(item,index,array);

// })



const myCoding=[
    {
        language:"javascript",
        file:"js"
    },
    {
        language:"python"  ,
        file:"py"  
    }
]


myCoding.forEach((item)=>{
     
    console.log(item.language);
})


