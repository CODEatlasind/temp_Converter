const scale = [0,1,2];

var inT=document.getElementById("tempFrom");
var outT=document.getElementById("tempTo");
var inTemp=document.getElementById("i/pTemp");
var outTemp=document.getElementById("o/pTemp");
var submit=document.getElementById("submit");

inT.addEventListener("change",function(){
    const del=tempConversion(inTemp.value,inT.value,outT.value);
    outTemp.innerHTML=del;
});
outT.addEventListener("change",function(){
    const del=tempConversion(inTemp.value,inT.value,outT.value);
    outTemp.innerHTML=del;
});

submit.addEventListener("click",function(){
    const del=tempConversion(inTemp.value,inT.value,outT.value);
    outTemp.innerHTML=del;
});
