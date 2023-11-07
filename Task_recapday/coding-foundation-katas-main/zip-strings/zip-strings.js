function zipStrings(strA, strB) {
  let result = "";
  let length = 0;
  if (strA.length > strB.length) {
    length = strA.length;
  } else {
    length = strB.length;
  }
  for (let i = 0; i < length; i++) {
    if (i >= strA.length) {
      result += strB[i];
    } else if (i >= strB.length) {
      result += strA[i];
    } else {
      result += strA[i] + strB[i];
    }
  }
  return result;
}
