// code your solution here
// code your solution here
const record = [
    {year: "2015", result: "w"},
    {year: "2014", result: "N/A"},
    {year: "2013", result: "l"},
]

const superbowlWin = record.find(record => record.year === '2015');

console.log(superbowlWin);

