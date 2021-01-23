
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if(!Array.isArray(matrix)) return []
  let result = [];
  for(let i = 0; i < matrix.length; i++){
    if(i % 2 == 1) matrix[i].reverse()
    for(let item of matrix[i]){
      result.push(item)
    }
  }
  return result;
}
