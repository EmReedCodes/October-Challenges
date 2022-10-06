function replaceLetters(str) {
    const key = ['S', 'p', 'a', 'c', 'e']
    return str.split('').filter(item => !key.includes(item)).join('')
  }