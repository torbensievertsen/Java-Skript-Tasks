function extractClassName(sessionTitle) {
  const months = {
    Januar: "01",
    Februar: "02",
    März: "03",
    Maerz: "03",
    April: "04",
    Mai: "05",
    Juni: "06",
    Juli: "07",
    August: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Dezember: "12",
  };
  let arr = [];
  if (sessionTitle.includes("Live-Session Class")) {
    arr = sessionTitle.split(" ");
  } else {
    return null;
  }
  if (arr[2].length !== 4) {
    return null;
  }
  if (arr[3] in months) {
    return arr[2] + "-" + months[arr[3]];
  } else {
    return null;
  }
}
