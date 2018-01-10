var val=10;
window.onload=function(){
$.ajax({
    type:"GET",
    url:"test.json",
    succcess:function(data){
        console.log(JSON.parse(data));
    },
    error:function(err){
   console.log(err);     
    }
});
}