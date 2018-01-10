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

const obj={
    add:function(x,y){
        var a=x;
        var b=y;
        console.log(a+b);
    }
};
obj.add(100,20);

obj6 = obj1; 
obj6.a.b=3;
console.log(obj6);
console.log(obj1);
obj7 =Object.assign(obj2);
obj2.a.b=10;
console.log(obj2);
console.log(obj7);

var a=5;
var b;
b=11;
a=b;

console.log(b)
console.log(a);

