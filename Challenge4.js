function reverseWithWSpace(str) {
    let reversed = []
    for (let i = str.length; i >= 0; i--){
      reversed.push(str[i])
    }
    return reversed.join('')
  }