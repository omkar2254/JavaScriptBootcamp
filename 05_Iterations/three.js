//Array specific loops
//for of loop

//basically used to perform operations on such arrays
// ["", "", ""]
//[{}, {}, {}]

//Here Object means on which array, string etc, and iterator is just like i
// for(const iterator of Object){
//     console.log(iterator)
// }

const arr = [1, "Omkar", 3, "Patil", 5, 6];
// for(const num of arr){
//     console.log(num);
// }

//for - in loop on array
for(const key in arr){
    console.log(arr[key])
}

// const str = "Omkar&Patil";
// for(const st of str){
//     if(st === "&"){
//         continue;
//     }
//     console.log(st);
// }

//Map --> Object holds key value pairs & all unique values
const map = new Map();
map.set("In", "India");
map.set("Ru", "Russia");

//console.log(map);

for(const [key, value] of map){
    //console.log(key + ":" + value);
}
//console.log(typeof map);

const obj = {
    name: "Omkar",
    age: 22
}
//console.log(obj.name);
for(const [key, value] of obj){
    console.log(key + ":" + value);
}





