// 1. Create an array size 50 , fill with random numbers between 1 - 100
console.log("===Q1 : Random Array size of 50 value from 1 to 100=======")
const numArray = [];
for (let i = 0; i<50; i++){
    let randomNum = Math.random() *100.0001;
    let randomNumWholeNum = Math.ceil(randomNum);
    numArray.push(randomNumWholeNum);
}

console.log(numArray.sort((a,b)=>a-b));
console.log("===Q2: Total value of the array===")
// 2. calculate the total value of the array
const total = numArray.reduce((subTotal,item)=>{
    return subTotal + item; 
},0);

console.log(total);


// 3. remove the duplicate items in the array.
console.log("===Q3: Remove duplicate from the array====")
const nonDuplicatedArray = [];
numArray.forEach(element => {
    if (!nonDuplicatedArray.includes(element)){
        nonDuplicatedArray.push(element)}});

// sorted nonDuplicatedArray before displaying so that it is easy to read
console.log(nonDuplicatedArray.sort((a,b)=>a-b));


// 4.  make 2 sub arraySpliced, one with the even numbers and another one with the odd numbers.
const evenArray = [];
const oddArray = [];
numArray.forEach(element => {
    element%2===0?evenArray.push(element):oddArray.push(element);    
});
console.log("===Q4: Separate even and odd to two different arrays.===")
console.log(evenArray);
console.log(oddArray);
