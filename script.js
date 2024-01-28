//1
let array1 = [5, 25, 89, 120, 36]
array1.pop()
array1.shift()
array1.push("javascript", "python")
array1.unshift("html", "css")
console.log(array1);
console.log(array1.length)


//2



//3
let array3 =[1, 2, 3, 4, 5];

// console.log(array3.splice(0, "a" , "b", "c"));






//4
let arr4 = [1, 2, 3, 4, 5];
 let result = arr4.reduce((element , accumulator)  =>{
    return element + accumulator
  
}, 0)
console.log(result)


    

    
   

// })

//5
let array5=[2,15,10,24];
let neWarray5 = array5.filter((element) => element !== 10)
console.log(neWarray5);


//6
let array = [12, 25, 3, 6, 8, 14, 7, 23];
let Newarray = array.map((element) => {
    return element / 3;
})
console.log(Newarray);



//7
let languages = ['html', 'css', 'javascript', 'python', 'php'];



//8
let words = ['madrid', 'rome', 'milan', 'berlin'];



//9

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let neWarr = arr1.concat(arr2 , arr3);
console.log(neWarr);

//10
let arr10 = [-1, -2, -3, 4];

let Newarr10 = arr10.some((element) => element > 0 )

console.log(Newarr10);



//11
let array11 =[23,45,32,5,87,7,3,98]
console.log(array11.sort((a,b) => b - a));















//12
// function getinfo() {
//     let nameuser = 'anna';
//     console.log(nameuser);


//     function userinfo() {
//         let info = `user name is ${nameuser}`;
//         console.log(info);
//     }
//     userinfo();
//     console.log(info);
// }


 // console.log(nameuser);
// getinfo();


