//for loop
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
//for(let i=0; i < arr.length; i++){
   // console.log(arr[i]);
//}

// for(let index=1; index<=10; index++){
//     if(index == 5){
//         console.log("5 detected");
//         break;
//     }
//     console.log(index);
// }

for(let index=1; index<=10; index++){
    if(index == 5){
        console.log("5 detected");
        continue;
    }
    console.log(index);
}