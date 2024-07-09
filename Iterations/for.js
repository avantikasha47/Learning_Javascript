//for loop

// for (let i = 0;index<10; index++) {
//     const element =index;
//     if (element==5) {
//         console.log("5 is best no ");
        
//     }
//     // console.log(element);
    
// }


// for (let i = 0; i <=10; i++) {
//     console.log(`outer loop:${i} `);
//     for (let j = 0; j<=10; j++) {
//         // console.log(`inner loop ${j} and inner loop ${i}`);
//         // console.log(i+"*"+j+" = " + i*j);
//     }
    
// }


let myarray=["flash","batman","superman"]

for (let index = 0; index < myarray.length; index++) {
    const element =myarray[index];
    console.log(element);
    
}          //no out of bound range etch it gvie undefined in that case



//index++ imp to control or terminate loop 



//break and continue



for (let index =1; index <=20; index++) {
    if(index==5){
        console.log("detected 5 ");
        continue  //   or break
    }
    console.log(`value of i is ${index}`);
 
}     //skip 5 in case of cont but in break stop seeing 5


