let arr=[1,3,5,7,8,5];
let num=5;

function greater(arr,num){
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
greater(arr,num);


let str1="abcdabcdefgggh";
let ans ="";
function unique(str1){
    for(let i=0 ;  arr.length ; i++) {
       let currChar = str1[i];
       if(arr.indexOf(currChar)== -1){
        ans += currChar;
       }
    }   
    return ans;
}
unique(str1);



let country = ["Australia", "Germany", "United States America"];

function longestName(country) {
let ansIdx = 0;
for (let i = 0; i < country.length; i++) {
let ansLen = country[ansIdx].length;
let currLen = country[i].length;
if (currLen > ansLen) {
ansIdx = i;
}
}
return country[ansIdx];
}
longestName(country);



let str = "apnacollege";
function countVowels(str) {
let count = 0;
for (let i = 0; i < str.length; i++) {
if (
str.charAt(i) == "a" ||
str.charAt(i) == "e" ||
str.charAt(i) == "i" ||
str.charAt(i) == "o" ||
str.charAt(i) == "u"
) {
count++;
}
}
return count;
}



let start = 100;
let end = 200;
function generateRandom(start, end) {
let diff = end - start;
return Math.floor(Math.random() * diff) + start;
}