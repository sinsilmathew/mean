const obj1={
    a:{
        b:1
    }
};

const obj2={
    a:{
        b:2
    }
};

console.log(obj1);
console.log(obj2);
const obj3=Object.create(obj1);
console.log(obj3.a);
//obj3.a={b:3};
//obj3.b=4;
const obj4 = Object.assign(obj2);
console.log(obj3);
console.log(obj4);