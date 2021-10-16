let unavailableItems = [
  { startPx: 10, endPx: 30 },
  { startPx: 55, endPx: 65 },
  { startPx: 35, endPx: 50 },
  { startPx: 20, endPx: 40 },
  { startPx: 60, endPx: 70 },
];
/* 
  Write a function (using ES6) that union all overlapping items
  produce an array of non overlapping items
*/
/*
  Answer should be 
  [{start: 10, end: 50}, {start: 55, end: 70}]
*/

let sortedArray = unavailableItems.sort((a, b) => a.startPx - b.startPx);
console.log();
