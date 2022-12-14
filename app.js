// let a =null;

// if (confirm("siz bosishga tayormisz?")) {
//     a =prompt("ismingizni kiriting")
//     alert("guruximizga xush kelibsiz!")
// } else {
//     alert("siz atmen berdiz")
// }

// let num = ''

// for(let i = 1; i < 100; i++){
//    if(i % 2 == 0){
//     num += i + '-'
//    }
// }
// console.log(num);
// let num = "";

// for (let i = 1; i < 100; i--) {
//   if (i % 2 == 0) {
//     num -= i - "-";
//   }
// }
// console.log(num);
const number = parseInt(prompt("Ijobiy raqam kiriting: "));
let num = true;
if (number === 1) {
    console.log("1 tub son xam emas qoshma xam");
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            num = false;
            break;
        }
    }
    if (num) {
        console.log(`${number} tub sondir`);
    } else {
        console.log(`${number} tub son emas`);
    }
}
else {
    console.log("Raqam tub son emas.");
}
