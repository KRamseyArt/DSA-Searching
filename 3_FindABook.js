function deweyDecimal(dewey, title, start, end){
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? dewey.length : end;

  if (start > end){
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = dewey[index];

  for (let i = 0; i< dewey.length; i++){
    if (dewey[i] === title){
      return 'Title Located!'
    }
  }

  console.log(start, end);
  if (item == title){
    return index;
  } else if (item < title){
    return deweyDecimal(dewey, title, index+1, end);
  } else if (item > title){
    return deweyDecimal(dewey, title, start, index-1);
  }
}

const dewey = [
  "Hamlet",
  "To Kill a Mockingbird",
  "The Illiad",
  "Becoming",
  "The Raven"
]
const title = "Becoming";

console.log(deweyDecimal(dewey, title));