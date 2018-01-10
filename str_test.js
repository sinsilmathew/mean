const str = "Malayalams";
var newstr='';
console.log(str.length);
for(let i=(str.length-1);i>=0;--i)
{
    newstr+= str[i];
}
console.log(newstr);