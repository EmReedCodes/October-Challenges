//this was the biggest fresh hell ever

function insaneList(str) {
  let catPuns = str.split(",")

  let allowedPuns = []

  for (let i = 0; i < catPuns.length; i++) {
    //checking whitespace
    if (catPuns[i].startsWith(" ") || catPuns[i].endsWith(" ")) {
      //works
      continue
    }
    //checking for words included
    if (
      catPuns[i].toLowerCase().includes("dog") ||
      catPuns[i].toLowerCase().includes("bone") ||
      catPuns[i].toLowerCase().includes("bark") ||
      catPuns[i].includes("S")
    ) {
      continue
    }
    //is divisible by 5
    if (catPuns[i].length % 5 === 0) {
      continue
    }
    //sum of beginning and end charCode even
    if ((catPuns[i].charCodeAt(catPuns[i].length - 1) + catPuns[i].charCodeAt(0)) % 2 === 0) {
      console.log("yes", catPuns[i])
      continue
    }
    //if the middle letter + 1 is e
    if (catPuns[i].charAt(Math.ceil(catPuns[i].length / 2)) === "e") {
      continue
    }
    //if the count of lowercase letters is odd
    if ((catPuns[i].match(/[a-z]/g) || []).length % 2 !== 0) {
      continue
    }
    //if the count of uppercase letters is less than 2
    if ((catPuns[i].match(/[A-Z]/g) || []).length < 2) {
      //good
      continue
      //everything else we want
    } else {
      allowedPuns.push(catPuns[i])
    }
  }

  return allowedPuns
}
