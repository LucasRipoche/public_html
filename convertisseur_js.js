 function init(){
   var dollar = document.getElementById("dollar").value;
   var euro = document.getElementById("euro").value;
   var yuan = document.getElementById("yuan").value;
 }



 function afficherMessage() {
   

  init();
  if(dollar.value != 0){
    
    teuro = dollar.value*0.85;
    tyuan = dollar.value*6.86;
    outeuro=teuro.toFixed(2);
    outyuan=tyuan.toFixed(2);
    document.getElementById("euro").value = outeuro;
    document.getElementById("yuan").value = outyuan;
    return;
  }

  if(euro.value != 0){
    
    tdollar = euro.value*1.17;
    tyuan = euro.value*8;
    outdollar=tdollar.toFixed(2);
    outyuan=tyuan.toFixed(2);
    document.getElementById("dollar").value = outdollar;
    document.getElementById("yuan").value = outyuan;
    return;
  }

  if(yuan.value != 0){
    
    teuro = yuan.value*0.12;
    tdollar = yuan.value*0.15;
    outeuro=teuro.toFixed(2);
    outdollar=tdollar.toFixed(2);
    document.getElementById("euro").value = outeuro;
    document.getElementById("dollar").value = outdollar;
    return;
  }

  
}

function clear() {
  alert("clear");
  document.getElementById("euro").reset();
  document.getElementById("dollar").reset();
  document.getElementById("yuan").reset();
}