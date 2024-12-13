let arr=[15, 30, 45, 60, 75, 90];
function extractAndReverse(arr){
  let newarr=arr.slice(2,5);
    let revarr=[];
  for(let i=newarr.length-1;i>=0;i--){
    revarr.push(newarr[i]);
  }return revarr;
}
let reversed=extractAndReverse(arr);
console.log(reversed);
