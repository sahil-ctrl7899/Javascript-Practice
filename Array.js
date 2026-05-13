let aa = new Array(10, 20, 30);
let b=[10,20,30];
console.log(aa);
console.log(b);

let arr = [{ name: "Sahil" }, { name: "Rahul" }];

let shallow = [...arr];

shallow[0].name = "Amit";

console.log(arr[0].name);   // "Amit"
console.log(shallow[0].name); // "Amit"
console.log(arr[0]);

let aaa = ["HTML", "CSS", "JS"];

aaa.push("Node.js");

// Add Element to the beginning
aaa.unshift("Web Development");

console.log(aaa);

let a = ["HTML", "CSS", "JS"];
console.log("Original Array: " + a);

let lst = a.pop();
console.log("After Removing the last: " + a);

// Removes and returns the first element
let fst = a.shift();
console.log("After Removing the First: " + a);

a.splice(1, 2);
console.log(a);

var f=[1,2,3];
 
var max=0;
for(let i=0;i<f.length;i++){
    if(f[i]>max){max=f[i];}
}
console.log(max);


erdctfvgbyhujnimkojminhuygtrfes