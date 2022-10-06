function fixString(decrypt) {
  hashCodeNums = {
    0: "O",
    1: "I",
    2: "Z",
    3: "E",
    4: "h",
    5: "S",
    6: "G",
    7: "L",
    8: "B",
    9: "q"
  }

  hashCodeAlpha = {
    O: "0",
    I: "1",
    Z: "2",
    E: "3",
    h: "4",
    S: "5",
    G: "6",
    L: "7",
    B: "8",
    q: "9"
  }

  let decodedStr = ""
  for (let i = 0; i < decrypt.length; i++) {
    if (hashCodeNums.hasOwnProperty(decrypt[i])) {
      decodedStr += hashCode[decrypt[i]]
    } else if (hashCodeAlpha.hasOwnProperty(decrypt[i])) {
      decodedStr += hashCodeAlpha[decrypt[i]]
    } else {
      decodedStr += decrypt[i]
    }
  }
  return decodedStr
}
