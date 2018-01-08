var p = new Promise((resolve, reject) => resolve(5));  
p.then((val) => console.log(val)); // 5
// p.then((err)=>console.log(err));