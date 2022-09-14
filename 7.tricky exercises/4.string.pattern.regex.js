// let words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"];

let pattern = "abbbcdd";

// let targetPattern = "";

for (i = 0; i < pattern.length; i++) {
  if (pattern.charAt(i) === pattern.charAt(i + 1)) {
    console.log("repeat");
  } else console.log("single");
}

// console.log("result: ");
// console.log(result);

// for(let i=0; i<words.length; i++){

//     let word = words[i];
//     word.search()

//     if((word[0]!=word[1]) && (word[1]==word[2])){

//         result.push(words[i]);

//     }

// }
