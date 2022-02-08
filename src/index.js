
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined) {
    return [];
}
if (!matrix) {
    return [];
}
let result = [];
for(let i=0; i<matrix.length; i++){
    if(i%2==0)
    {
        result = result.concat(matrix[i]);
    }else{
        x = matrix[i].reverse();
        result = result.concat(x);
    }
}
return result;}
