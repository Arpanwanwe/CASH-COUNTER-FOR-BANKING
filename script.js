let hunderd = document.getElementById("hundred");
let fifty = document.getElementById("fifty");
let twenty = document.getElementById("twenty");
let ten = document.getElementById("ten");
let five = document.getElementById("five");
let one = document.getElementById("one");
let twentyfc = document.getElementById("twentyfc");
let tenc = document.getElementById("tenc");
let fivec = document.getElementById("fivec");
let onec = document.getElementById("onec");
let showresult = document.getElementById("result");
let calbtn = document.getElementById("calbtn");
let clearbtn = document.getElementById("clebtn");
function calculate(){
    
    let vhunderd = hunderd.value*2000;
    let vfifty =  fifty.value*1000 ;
    let vtwenty = twenty.value*500;
    let vten =  ten.value*100 ;
    let vfive = five.value*50 ;
    let vone =  one.value*20;
    let vtwentyfc = twentyfc.value*10;
    let vtenc = tenc.value*5; 
    let vfivec =  fivec.value*1;  
    let vonec =  onec.value*2; 
// alert(vonec);
    let result = vhunderd+vfifty+vtwenty+vten+vfive+vone+vtwentyfc+vtenc+vfivec+vonec;
    showresult.innerHTML = " RS_"+result;

    
}
function clear(){
    hunderd.value = "";
    fifty.value= "";
    twenty.value = "";
    ten.value = "" ;
    five.value = "" ;
    one.value = "";
    twentyfc.value = "";
    tenc.value = ""; 
    fivec.value = "";  
    onec.value = ""; 
}

calbtn.onclick = calculate;
clearbtn.onclick = clear;