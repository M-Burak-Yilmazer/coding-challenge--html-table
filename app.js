const table = [
  "Student_No - First_Name Last_Name, Location, Path",
  "C1234 - John Doe, London, Full-Stack",
  "C2345 - Jane Doe, London, Data-Science",
  "C2346 - Mary Ann, Paris, AWS-Devops",
  "C2347 - Adam Smith, Texas, AWS-Devops",
  "C2444 - Michael Great, Arizona, Full-Stack",
  "C2555 - William Cash, Manchester, Data-Science",
  "C2455 - Patrick Jane, Madrid, Full-Stack",
];




// const organizedTable = table.map(
//   (item) =>
//     item.split(" -")[0] +
//     "&" +
//     item.split(" ")[2] +
//     "&" +
//     item.split(" ")[3].slice(0, -1) +
//     "&" +
//     item.split(" ")[4].slice(0, -1) +
//     "&" +
//     item.split(" ")[5]
// );
// console.log(organizedTable);


const clearTable = table.map((item) =>
  item.replaceAll("- ", "").replaceAll(",", "")
);
console.log(clearTable);

const organizedTable = clearTable.map((item) => item.split(" "));
console.log(organizedTable);

const tablo = document.querySelector(".table");
for (let i = 0; i < organizedTable.length; i++) {
  const tRow = document.createElement("tr");

  tablo.appendChild(tRow);
  if (i == 0) {
    for (let j = 0; j < organizedTable[i].length; j++) {
      const tHead = document.createElement("th");
      tRow.appendChild(tHead);
      tHead.innerHTML = organizedTable[i][j].replace("_", " ");
    }
  } else {
    for (let k = 0; k < organizedTable[i].length; k++) {
      const tData = document.createElement("td");
      tRow.appendChild(tData);
      tData.innerHTML = organizedTable[i][k]
    }
  }
}
