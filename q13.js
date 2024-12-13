var arr1=[6,5,4,3,2,1];
let arr2=[12,11,10,9,8,7];
function filterEvenNumbers(arr1){
  let filarr=arr1.filter(function(el,arr){
   return el%2===0
     });return filarr;
}
function sumOfArray(arr){
  let sum=arr.reduce(function(acc,el){
    return acc+el;
  });return sum;
}
function sortAndConcat(arr1, arr2){
  let sort1=arr1.sort((a,b)=>{return a-b})
  let sort2=arr2.sort((a,b)=>{return a-b})
  return finarr=sort1.concat(sort2);
}
let filt=filterEvenNumbers(arr1);
console.log(filt);
let sumofarr=sumOfArray(filt);
console.log(sumofarr)
let final=sortAndConcat(arr2,arr1);
console.log(final)
