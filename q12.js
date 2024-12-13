let arr1 = ["car", "bike", "train"];
let arr2 = ["plane", "ship"];
function modifyAndMerge(arr1,arr2){
  arr1.splice(1,1,"bus","scooter");
  return arr1.concat(arr2);
};
let newarray=modifyAndMerge(arr1,arr2);
console.log(newarray);
