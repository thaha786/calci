var ans=0;
var s="";

document.getElementById("add").onclick = function(){
    var a = parseInt(document.getElementById("n1").value);
    ans=ans+a;
    if(s.length==0){
        s=s+a;
    }
    else{
        s=s+("+"+a);
    }
    document.getElementById("result").textContent= ans;
    console.log(ans);
}
sub=()=>{
    var a=parseInt(document.getElementById("n1").value);
    ans=ans-a;
    if(s.length==0){
        s=s+a;
    }
    else{
        s=s+("-"+a);
    }
    document.getElementById("result").textContent= ans;
    console.log(ans);
}
document.getElementById("mul").onclick = function(){
    var a=parseInt(document.getElementById("n1").value);
    ans=ans*a;
    if(s.length==0){
        s=s+a;
    }
    else{
        s=s+("*"+a);
    }
    document.getElementById("result").textContent= ans;
    console.log(ans);
}
document.getElementById("div").onclick = function(){
    var a=parseInt(document.getElementById("n1").value);
    ans=ans/a;
    if(s.length==0){
        s=s+a;
    }
    else{
        s=s+("/"+a);
    }
    document.getElementById("result").textContent= ans;
    console.log(ans);
}
document.getElementById("isequ").onclick = function(){
    document.getElementById("wait").textContent= s;

}