
function celsiusToFahrenheit(celsius){
    const fahrenheit = celsius * 9/5 + 32;
    return fahrenheit
}
console.log(celsiusToFahrenheit(0))
console.log(celsiusToFahrenheit(25))


function isEven(num) {
    return num % 2 === 0;

}

console.log(isEven(3))


function sum(a,b){
    return a + b
}
console.log(sum(3,4))
console.log(sum(10,20))


function findSmallestNum(arr){
    return Math.min(...arr);
}
console.log(findSmallestNum([3, 5, 1, 9]))
console.log(findSmallestNum([-1, -5, 0, 10]))

function countVowels(str) {
    const count = str.match(/[aeiou]/gi).length;
    return count;
    


}
console.log(countVowels("hello world"));
console.log(countVowels("Javascript"));

function getFirstElement(arr)  {
    let firstone = arr[0]
    return arr[0]

}

console.log(getFirstElement([1, 2, 3])); 
console.log(getFirstElement(["a", "b", "c"]));


function isArrayEmpty(arr) {
    return arr.length === 0;
}

console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3]));

function factorialize(num) {
    let result = num;
    if (num === 0 || num === 1) return 1;
    while(num > 1){
        num--;
        result = result * num;
        
    }
    return result
    
}

console.log(factorialize(5)); 
console.log(factorialize(7));


function reverseString(str) {
    const stringArray = str.split('');
    stringArray.reverse();
    const reversedString = stringArray.join('');
    return reversedString
  }
  
  console.log(reverseString("hello")); 
  console.log(reverseString("world")); 

function toLowerCase(str){
    return str.toLowerCase();
}

console.log(toLowerCase("HELLO WORLD")); 
console.log(toLowerCase("JavaScript"));


function stringLength(str){
    return str.length;
}

console.log(stringLength("hello")); 
console.log(stringLength("world"));

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
  console.log(mergeArrays(["a", "b"], ["c", "d"])); 
  
function getLastElement(arr){
    return Array.isArray(arr) && arr.length
    ? arr[arr.length - 1]
    : null;
}

console.log(getLastElement([1, 2, 3])); 
console.log(getLastElement(["a", "b", "c"]));


function getFirstCharacter(str) {
    return str.charAt(0)
  }
  
  console.log(getFirstCharacter("hello")); 
  console.log(getFirstCharacter("world")); 
  
  function sumArray(arr) {
    total = 0;  
    arr.forEach(function(key){
        total = total + key;            
    });
    return total;
  }
  
  console.log(sumArray([1, 2, 3, 4])); 
  console.log(sumArray([-1, -2, -3, -4])); 
  console.log(sumArray([1.5, 2.5, 3.5])); 
  