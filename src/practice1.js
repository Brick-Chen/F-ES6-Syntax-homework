const parseData = (input) => {
  let data = input.data;
  let column = input.column;
  let output = [];
  for (let i = 0; i < data.length; i++) {
    let obj = {};
    for(let j = 0; j < column.length; ++j) {
      obj[column[j].name] = data[i][j];
    }
    output.push(obj);
  } 
  return output;
}  

export { parseData };
