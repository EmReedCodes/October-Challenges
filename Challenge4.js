function replaceLetters(str) {
    const key = ['S', 'p', 'a', 'c', 'e']
    const newStr = [] 
    for (let i = 0; i < str.length; i++){
      if (key.includes(str[i])) {
        newStr.push(' ')
      } else {
        newStr.push(str[i])
      }
    }
    return newStr
  }
  
  replaceLetters("dfksspaceSsdfjd")