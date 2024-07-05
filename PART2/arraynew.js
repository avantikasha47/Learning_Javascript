const   heros=["thor","ironman","spiderman"]
const   dc=["avni","avnti"]

// heros.push(dc)
// console.log(heros);    //array k under array [[]]   //push in existing array
// console.log(heros[3][1]);


// const allheros=heros.concat(dc)
// console.log(allheros)


// const all_new_heros=[...heros, ...dc]
// console.log(all_new_heros);  //use same as concat result
//spread operatorr can add any no of values 


// const another_array=[1,2,3,4,[3,4,5,6],7,[4,5,6,7,[6]]]
// const real=another_array.flat(Infinity)
// console.log(real);  //all values are spread out 


// console.log(Array.isArray("avani"))   //ask

console.log(Array.from("avani"))   //form array

console.log(Array.from({name:"avni"}))  //interesting case  //btana pdegaa value ya key s array bnao rest give empty 

let score1=100
let score2=300
let score3=90
console.log(Array.of(score1,score2,score3))  //variable ka array bnao 

