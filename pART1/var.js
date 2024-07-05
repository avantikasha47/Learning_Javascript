const accountid=123//for fix
let accountemail="av@google.com"   //better way
var accoundpass="1234"//create block scope  and functional scope issue problem
accountcity="jaipur"//bad
let accountState;//get undefined

// accountid=2 not allowed due to const variable 
accountemail="hc@gmail.com"
accountpass="54"
accountcity="pune"


// print them 
// console.log("accountid")
// console.log("accountemail")
// console.log("accountpass")
// console.log("accountcity")
console.table([accountid,accountemail,accountpass,accountcity,accountState])