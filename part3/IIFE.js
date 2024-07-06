//immediately invoked function expressions(IIFE)

//turant execture kro   //for  global  scope pollution problem 




// function chai()
// {
//     console.log("DB CONNECTED");
// }
// chai()


(function chai()
   //name IIFE
{
    console.log("DB CONNECTED");
})();

//() to define and ()for invovked


(  (name)=>{
    //simple IIFE
    console.log(`db connected ${name}`);
}

)("avni");  //error    of semicolon 



( function aurcode(){
    console.log(`db connected`);
}

)();  //again error   because of semicolon 





//know about how js code is executed 
//also  get about the call stack system in js 



