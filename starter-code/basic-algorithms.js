// Names and Input
var hacker1 = "Elsa";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What's the navigator's name?");

console.log("The navigator's name is " + hacker2);

//Conditionals
if (hacker1.length===hacker2.length){
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
} else if (hacker1.length>hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length<hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}

//Loops

//Exercise 6

function insertSpace(hacker1toUppercase) {
  var hacker1toUppercase = hacker1.toUpperCase();
  var separatedName = hacker1toUppercase.split("").join(" ");
  console.log(separatedName);
  return separatedName;
}
insertSpace(hacker1);

//Exercise 7

function reverseName(hacker2Split) {
  var hacker2Split = hacker2.split("");
  var nameReverse = hacker2Split.reverse();
  var joinName = nameReverse.join("");
  console.log(joinName);
  return joinName;
};

reverseName(hacker2);

//Exercise 8

function sortAlphabetically(a,b){
  var a = a.toLowerCase();
  var b = b.toLowerCase();
  if (a>b){
    console.log("The driver's name goes first")
  } else if (a<b){
    console.log("Yo, the navigator goes first definitely")
  } else {
    console.log("What?! You both got the same name?")
  }
};
sortAlphabetically(hacker1,hacker2);

// Lorem ipsum generator

//Exercise 9

var isPalindrome = prompt('introduce palabra/frase');
isPalindrome = isPalindrome.replace(/[^a-zA-Z 0-9]+/g,'');
isPalindrome = isPalindrome.split('');
var cleanString = isPalindrome.filter(function(letter){
   return letter !== ' ' ;
});
if(cleanString.join() !== cleanString.reverse().join()){
  console.log('not a palindrome')
}else{
  console.log('palindrome')
}

//Exercise 10

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut elementum orci. Curabitur molestie augue sem, id congue eros accumsan nec. Etiam ut sapien porttitor, congue sapien quis, lacinia nisl. In hac habitasse platea dictumst. Vestibulum iaculis arcu dui, ut pellentesque massa lacinia ac. Quisque vitae diam vitae ligula eleifend fermentum id id lorem. Donec faucibus lorem quis ornare fringilla. Suspendisse sed euismod massa. Quisque sed iaculis nunc, vitae mollis urna. Suspendisse id tincidunt lacus. Cras vel ornare ligula. Integer pellentesque eros et felis mollis eleifend. Donec accumsan tincidunt eros, nec facilisis velit porttitor sit amet. Aliquam cursus nisl eu sem convallis eleifend. Etiam condimentum quis lacus quis vestibulum. Nullam egestas quis elit at pretium. Nunc sodales eros nec pretium rhoncus. Maecenas et lobortis nulla. Nulla ac elit sit amet nibh laoreet rhoncus. In aliquet sit amet ligula ac lacinia. Nunc ex odio, blandit eu nisi pharetra, imperdiet tincidunt enim. Nam et auctor metus, nec efficitur ligula. Mauris pharetra libero ut dui mattis condimentum. Donec egestas nunc lacus, quis hendrerit enim semper at. Nullam mattis purus vel vulputate mattis. Sed nec ultrices turpis. Maecenas bibendum justo vitae sem fermentum, ut eleifend nulla egestas. Cras ut porttitor enim. Sed mollis a nisi et facilisis. Nulla sit amet metus dapibus, varius dolor eu, pulvinar dui. Sed sed tincidunt magna, in sagittis sem. Nulla gravida, ligula et rhoncus scelerisque, ex eros aliquet justo, ac pulvinar diam leo nec massa. Nam at suscipit purus. Aenean quis dolor eu dui egestas molestie et a mi. Morbi interdum, arcu a rutrum varius, lectus enim efficitur ipsum, ut scelerisque magna tortor vel mauris. Phasellus pulvinar iaculis venenatis. Ut ultrices massa turpis, eget aliquet dui suscipit ut. Curabitur at felis interdum, volutpat quam tempus, aliquam eros. "
function wordCount(str) { 
  return str.split(" ").length;
}

console.log("The number of words in the string is " + wordCount(loremIpsum));

//Option 1 - Count 'et' word

function countEt(splitArray)  {
  var splitArray = str2.split(" ").length;
  return splitArray.filter(function(word){
    if (word==="et") {
      return word;
    }; 
  })
}
console.log("The word 'et' appears " + countEt(loremIpsum))

//Option 2 - Count 'et' word (best & easier method)

function countEt2(splitArray2) {
  var counter = 0;
  var splitArray2 = str3.split(" ").length;
  splitArray2.forEach(function(word){
    if (word==="et") {
      counter++;
    };  
  })
  return counter;
}
console.log("The word 'et' appears " + countEt2(loremIpsum))
