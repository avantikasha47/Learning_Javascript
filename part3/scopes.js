// var c=300
// console.log(a);
// console.log(b);
// console.log(c);   //everything is ok 

let a=300

if(true){

    let a=10
    const b=20
    // console.log(a); //10
}
// console.log(a); //goblal scope 300
// console.log(b);
// console.log(c);  //c output m aa gye jbki block k undr define hua h 
//300 ko b nhi lia
//without var b ayaa problem 


//var avoid 
//so now next with local and global


//...........................................................................................................


//about nested scope 
function one()
{
    const username="hero"
    function two()
    {
        price=199
        console.log(username)
    }
    // console.log(price); not possible
    two() //two ko call kregaaaa
    console.log("hello");
}
// one()  //sirf one ko kru toh 2 call nhi hogaa    //one call nhi kia toh two b call nhi hoga



if(true)
{
    const username="avni"
    if(username=="avni")
    {
        const website="youtube"
        // console.log((username+website));
    }
    // console.log(webiste);

}
// console.log(username);






//+++++++++++++++ something intersting +++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5))
function addone(num)
{
    return num+1
}

// console.log(addtwo(5) )    //error on this case

const addtwo=function(num)
{
    return num+2
}
   //variable ki trah 


   


