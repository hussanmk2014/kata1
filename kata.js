function reorder( word) {
    var upper = "";
    var lower = "";
    var number=0;
  for (let char of word) {
  if (char >= "A" && char <= "Z") {
    upper += char;
  } else if (char >= "a" && char <= "z") {
    lower += char;
  }  
  else  {
    number += char;
  }  
    
}

console.log(upper + lower+ number);
}

 reorder("thSEgg66546fhhghk664G");