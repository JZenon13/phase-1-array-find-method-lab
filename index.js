// code your solution here
// const record = [
//   { year: "2015", result: "L" },
//   { year: "2014", result: "N/A" },
//   { year: "2013", result: "W" },
// ];

// const superbowlWin = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].result === "W") {
//       return array[i].year;
//     }
//   }
// };

const superbowlWin = (array) => {
  let sbWin = array.find((object) => object.result === "W");
  if (sbWin === undefined) {
    return sbWin;
  } else {
    return sbWin.year;
  }
};
superbowlWin();
