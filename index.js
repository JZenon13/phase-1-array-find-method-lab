// code your solution here

// const superbowlWin = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].result === "W") {
//       return array[i].year;
//     }
//   }
// };

// const superbowlWin = (array) => {
//   let sbWin = array.find((object) => object.result === "W");
//   if (sbWin === undefined) {
//     return sbWin;
//   } else {
//     return sbWin.year;
//   }
// };
// superbowlWin();

const record = [
  { year: "2015", result: "L" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "W" },
];

function superbowlWin(record) {
  for (let i = 0; i < record.length; i++) {
    if (record[i].result === "W") {
      return record[i].year;
    }
  }
}

// function superbowlWin(record) {
//   for (let i = 0; i < record.length; i++)
//     if (record[i].result === "W") {
//       return record[i].year;
//     } else {
//       return undefined;
//     }
// }
