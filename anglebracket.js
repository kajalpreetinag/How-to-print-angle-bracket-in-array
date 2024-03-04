// Write a program to take value N from the user and 
// print the following pattern based on the user input.
// array = [2, 3, 5, 2, 1]
// >>
// >>>
// >>>>>
// >>
// >



const  input = require("readline-sync")
let n = input.questionInt("Enter the size of array: ")
let array=[];

for(  let i=0;i<n ;i++)
{
    let a = input.questionInt("enter the number: ")
    array[i]=a;
     
}
for(i=0; i<n; i++){
    console.log("<".repeat(array[i]));


}

