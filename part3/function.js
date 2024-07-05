function callmyname()
{
    console.log("a");
    console.log("v");
    console.log("n");
    console.log("i");
    
}



// callmyname()

// function Sum(n1,n2)    //pass parameters  under function time of declaration
// {
//     console.log(n1+n2);
// }
function Sum(n1,n2)    //pass parameters  under function time of declaration
{
    // let result=n1+n2
    // return result    //understanding return in function 
    return n1+n2
}

// Sum(3,4)     //7
// Sum(3,"4")     //34

// Sum(3,"a")       //3a
// Sum(3,null)      //3


const  result=Sum(3,4)
// console.log(result);




function loginuser(username="sam")  //can give default value also
{
    if(username===undefined)
    {
        return 
    }
   return `${username} just logged in`
}

// console.log(loginuser("avantika"))
// console.log(loginuser());  //get undefined



//use rest operator to bind all in array dynamically add
//v1 and v2 make fix first two rest go to array
function calculatecartprice(v1,v2,...n1)
{
    return n1
}

// console.log(calculatecartprice(200,400,500,400,500)) //dynamically added values


const user={
    username:"avni",
    price:199

}
function handleobject(anyuser)
{
   console.log(`Username is  ${anyuser.username} and price is ${anyuser.price}`)
}

// handleobject(user)


//send object
handleobject(
    {
        username:"sam",
        price:200
    }
)



const mynewarray=[200,400,500]
function returnvalue(getarray)
{
    console.log(`value is ${getarray[1]}`)
}
// returnvalue(mynewarray)



//send array proper
returnvalue([100,200,300])


