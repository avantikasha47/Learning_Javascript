//for of loop

// [{},{},{}]           object in array



const array=[1,2,3,4,5,6]
for (const num  of array) {
    // console.log(num);
}

const myarray=["hello","hye","bye"]
for (const greet of myarray) {
    // console.log(greet);
    
}


const str="Avantika Sharma"
for (const greet of str) {
    // console.log(greet.toUpperCase());
    
}


//Maps key value pair and unique value holds

const map=new Map()  // its a object


map.set("IN","INDIA")
map.set('USA',"united states of america")
map.set("Fr","France")


console.log(map);

//Map(3) {
//     'IN' => 'INDIA',
//     'USA' => 'united states of america',
//     'Fr' => 'France'
//   }      //its output   like a set and dictonary of python 


for (const [i,value] of   map) {
    console.log(i,":-",value);
    


}
//output

// [ 'IN', 'INDIA' ]
// [ 'USA', 'united states of america' ]
// [ 'Fr', 'France' ]



// IN :- INDIA
// USA :- united states of america
// Fr :- France


// const myObject={
//     "game1":"NFS",
//     "game2":"Spiderman"

// }

// for (const i of myObject) {
//     console.log(i);
    
// }      //my object is not iterable








