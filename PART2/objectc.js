const tinderuser=new Object()
// const tinderuser={}
 tinderuser.id="abc"
 tinderuser.name="sam"
 tinderuser.isloggedin=false
// console.log(tinderuser.name);



const regularuser={
    email:"sam@gmail.com",
    fullname:{
        username:{
            firstname:"avani",
            lastname:"sharma"
        }


    }
}

// console.log(regularuser.fullname.username.firstname);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}
// console.log(obj3)    //same as array


// const obj4=Object.assign(obj1,obj2)   //can use {},obj1,obj2

const obj4={...obj1,...obj2}
// console.log(obj4)


const users=[
    {
    id:1,
    email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },

]
// console.log(users[1].email)


// console.log(tinderuser)
// console.log(Object.keys(tinderuser))   //daya type os array
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))

// console.log(tinderuser.hasOwnProperty("isloggedin"))  //vo exitst krta h ki nhi 





//...............destructing.........................
const course={
    cousername:"js",
    price:"999",
    courseinstrcutor:"me"

}
//course.price

const{courseinstrcutor:instructor}=course //change name 
// console.log(courseinstrcutor);
console.log(instructor);

//...............API...................................

// {
//     "name":"avni",
//     "coursename":"js",
//     "price":"free"
// }

[
    {},
    {},
    {}
]