function catKeyboard(str) {
    let noKitty = str.slice(str.indexOf('c') + 1)
    let fixKitty = noKitty.replaceAll('Eek!', '').split(' ').map(item => item.split('').reverse().join('')).reverse()
   return fixKitty.join(' ').split('v').map(item => item[0]).slice(1)
 }