const mynums=[1,2,3]

// const mytotal=mynums.reduce(function (acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc+currval
// },0)


// console.log(mytotal);




// const mytotal=mynums.reduce((acc,currval)=>acc+currval,0)

// console.log(mytotal);


const shoppingcart=[{
    itemname:"saree",
    price:700
},
{
    itemname:"kurti",
    price:600
},
{
    itemname:"skirt",
    price:1000
}
]




const totalbill=shoppingcart.reduce((acc,currval)=>acc+currval.price,0)


console.log(totalbill);