function myfun(){
  var val=document.querySelector("input").value;
  console.log(val);
  var list=document.createElement("li");
  var p=document.createElement("p");
  p.innerText="-";
  list.innerText=`${val} `;
  var ul=document.querySelector("ul");
  
  p.classList.add("btn1");
  ul.prepend(list,p);
 
  document.querySelector("input").value="";
  document.querySelector(".btn1").addEventListener("click",remove);
  function remove(){
    list.remove();
    p.remove();
  }
  
}
