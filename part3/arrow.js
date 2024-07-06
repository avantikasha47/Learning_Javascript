//window object in browser


const user={
    username:"avni",
    price:777,



    welcomemessage:function()
    {
        console.log(`${this.username},welcome to a website`);
        // console.log(this);    //get full current context
    }

}

// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()
// console.log(this);  //empty no context gloablly 


// function chai()
// {
//     let username="avni"
//     console.log(this.username);  //output undefined
// }
// chai()


// const chai=function(){
//     let username="avni"
//     console.log(this.username);  //again undefined
// }
// chai()

const chai=()=>{      //arrow function
    let username="avni"
    console.log(this);  //again undefined   //empty
}
// chai()



// const addtwo=(n1,n2)=>{
//     return n1+n2
// }
// console.log(addtwo(3,4))

//const addtwo=(n1,n2)=> n1+n2    //implicit return 
// const addtwo=(n1,n2)=> (n1+n2)    //another way
// const addtwo=(n1,n2)=> {usrname:"avni"}   //undefined
const addtwo=(n1,n2)=> ({username:"avni"})
// console.log(addtwo(3,4))

//arrow fucntion in loop also 


const happy=()=>
{
   h="happy"
   console.log(h);
}

happy()