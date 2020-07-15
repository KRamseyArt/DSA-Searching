function binarySearch(array, value, start, end){
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end){
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value){
    return index;
  } else if (item < value){
    return binarySearch(array, value, index+1, end);
  } else if (item > value){
    return binarySearch(array, value, start, index-1);
  }
}

function partA(){
  let list = [
    3,
    5,
    6,
    8,
    11,
    12,
    14,
    15,
    17,
    18
  ]
  console.log(`\n1A`)
  binarySearch(list, 8)
}
partA();
// Number sequences searched:
// 1) 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// 2) 3, 5, 6, 8, 11
// 3) 8, 11

function partB(){
  let list = [
    3,
    5,
    6,
    8,
    11,
    12,
    14,
    15,
    17,
    18
  ]
  console.log(`\n1B)`)
  binarySearch(list, 16)
}
partB();
// Number sequences searched:
// 1) 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// 2) 14, 15, 17, 18
// 3) 14, 15
// 4) 15, 15 => -1