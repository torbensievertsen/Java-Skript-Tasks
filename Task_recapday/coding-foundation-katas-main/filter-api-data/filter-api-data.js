function filterApiData(apiData, mandatoryKeys) {
  console.log("test");
  const output = [];
  let test = true;
  for (let i = 0; i < apiData.length; i++) {
    for (let j = 0; j < mandatoryKeys.length; j++) {
      if (!(mandatoryKeys[j] in apiData[i])) {
        test = false;
      }
    }
    if (test) {
      output.push(apiData[i]);
    }
    test = true;
  }
  console.log(output);
  return output;
}
