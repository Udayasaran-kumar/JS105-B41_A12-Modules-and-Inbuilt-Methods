let library=["Harry potter","Improve your thoughts","Rich dad,Poor dad"];
library.push("Blade runner");
console.log(library.filter((el)=>el!=="Improve your thoughts"));
console.log(library.includes("Harry potter"));
console.log(library.indexOf("Harry potter"));
library.push("Blade runner");
console.log(library.lastIndexOf("Blade runner"));
console.log(library.slice(1));
library.splice(0,0,"Mechanics");
console.log(library);
console.log(library.join(","));