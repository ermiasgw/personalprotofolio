  
  var functionRun=false;
  function menu(){
    var elem=document.getElementById("menu");
    if(elem.className === "navb"){
      elem.className += "responsive";
      elem.style.top="0";
    }
    else{
      elem.className = "navb";
      elem.style.top="-50%";
    }
  }
  
  function hover(){
    var elem=document.getElementById("bottom");
    var elem1=document.getElementById("front");
    var elem2=document.getElementById("imagee");
    elem1.style.backgroundColor="rgb(75, 55, 55)";
    elem1.style.visibility="visible";
    elem2.style.transform="scale(1.2)";
    elem2.style.visibility="visible";
    elem2.style.opacity="0.8";
  }
  function hover2(){
    var elem1=document.getElementById("front");
    var elem2=document.getElementById("imagee");
    
    elem2.style.transform="scale(1)";
    setTimeout(() => { elem1.style.visibility="hidden";
    elem2.style.visibility="hidden"; }, 50);
      
    
  }

  function hover3(){
    var elem=document.getElementById("bottom");
    var elem1=document.getElementById("front");
    var elem2=document.getElementById("imagee2");
    elem1.style.backgroundColor="rgb(0, 55, 55)";
    
    elem1.style.visibility="visible";
    elem2.style.transform="scale(1.2)";
    elem2.style.visibility="visible";
    elem2.style.opacity="0.8";
  }
  function hover4(){
    var elem1=document.getElementById("front");
    var elem2=document.getElementById("imagee2");
    
    elem2.style.transform="scale(1)";
    setTimeout(() => { elem1.style.visibility="hidden";
    elem2.style.visibility="hidden"; }, 50);
      
    
  }

  function hover5(){
    var elem=document.getElementById("bottom");
    var elem1=document.getElementById("front");
    var elem2=document.getElementById("imagee3");
    elem1.style.backgroundColor="gray";
    
    elem1.style.visibility="visible";
    elem2.style.transform="scale(1.2)";
    elem2.style.visibility="visible";
    elem2.style.opacity="0.8";
  }
  function hover6(){
    var elem1=document.getElementById("front");
    var elem2=document.getElementById("imagee3");
    
    elem2.style.transform="scale(1)";
    setTimeout(() => { elem1.style.visibility="hidden";
    elem2.style.visibility="hidden"; }, 50);
        
  }

  function hover7(){
    var elem=document.getElementById("bottom");
    var elem1=document.getElementById("front");
    var elem2=document.getElementById("imagee4");
    elem1.style.backgroundColor="rgb(156, 201, 32)";
    
    elem1.style.visibility="visible";
    elem2.style.transform="scale(1.2)";
    elem2.style.visibility="visible";
    elem2.style.opacity="0.8";
  }
  function hover8(){
    var elem1=document.getElementById("front");
    var elem2=document.getElementById("imagee4");
    
    elem2.style.transform="scale(1)";
    setTimeout(() => { elem1.style.visibility="hidden";
    elem2.style.visibility="hidden"; }, 50);
      
    
  }
  function hover9(){
    var elem=document.getElementById("bottom");
    var elem1=document.getElementById("front");
    var elem2=document.getElementById("imagee5");
    elem1.style.backgroundColor="rgb(48, 161, 226)";
    
    elem1.style.visibility="visible";
    elem2.style.transform="scale(1.2)";
    elem2.style.visibility="visible";
    elem2.style.opacity="0.8";
  }
  function hover10(){
    var elem1=document.getElementById("front");
    var elem2=document.getElementById("imagee5");
    
    elem2.style.transform="scale(1)";
    setTimeout(() => { elem1.style.visibility="hidden";
    elem2.style.visibility="hidden"; }, 50);
      
    
  }
  function hover11(){
    var elem=document.getElementById("bottom");
    var elem1=document.getElementById("front");
    var elem2=document.getElementById("imagee6");
    elem1.style.backgroundColor="rgb(65, 59, 11)";
    
    elem1.style.visibility="visible";
    elem2.style.transform="scale(1.2)";
    elem2.style.visibility="visible";
    elem2.style.opacity="0.8";
  }
  function hover12(){
    var elem1=document.getElementById("front");
    var elem2=document.getElementById("imagee6");
    
    elem2.style.transform="scale(1)";
    setTimeout(() => { elem1.style.visibility="hidden";
    elem2.style.visibility="hidden"; }, 50);
      
    
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if(functionRun==false){
          percentt();
        }
      }
    });
  });
  observer.observe(document.querySelector('.skill'));

  function percentt(){
    functionRun=true;
    var elem1=document.querySelectorAll(".childs3");
    var elem2=document.querySelectorAll(".childs1");
    var elem3=document.querySelectorAll(".childs2");
    var elem4 = document.querySelectorAll(".childs");
    var elem=document.querySelectorAll(".circle");
    for(i=0;i<elem.length;i++){
      elem[i].style.visibility="visible";
    }
    let id=null;
    let radius=0;
    clearInterval(id);
    id = setInterval(frame, 6);
    function frame() {
      if(radius<=-129){
        clearInterval(id);
        percent2(radius);
      }
      else{
        radius--;
        for(i=0;i<=elem1.length;i++){
          elem1[i].style.transform="rotate("+radius+"deg)";
          elem2[i].style.transform="rotate("+radius+"deg)";
          elem3[i].style.transform="rotate("+radius+"deg)";
          elem4[i].style.transform="rotate("+radius+"deg)";
        }
      }
    }
    
  }
  function percent2(radius){
    var elem1=document.querySelectorAll(".childs3");
    var elem2=document.querySelectorAll(".childs1");
    var elem3=document.querySelectorAll(".childs2");
    var elem=document.querySelectorAll(".circle");
    for(i=0;i<elem.length;i++){
      elem[i].style.visibility="hidden";
    }
    id = setInterval(frame, 3);

    function frame() {
      if(radius<=-215){
        if(radius<=-304){
          
          if(radius<=-390){
            for(i=0;i<elem.length;i++){
              document.getElementsByClassName("percent")[i].style.visibility="visible";
            }
            clearInterval(id); 
            functionRun=false; 
          }
          else{
            radius--;
            if(radius>=-388){
              elem1[0].style.transform="rotate("+radius+"deg)";
            }
            if(radius>=-369){
              elem1[1].style.transform="rotate("+radius+"deg)";
            }
            if(radius>=-366){
              elem1[2].style.transform="rotate("+radius+"deg)";
            }
            if(radius>=-350){
              elem1[3].style.transform="rotate("+radius+"deg)";
            }
            if(radius>=-358){
              elem1[4].style.transform="rotate("+radius+"deg)";
            }
            if(radius>=-390){
              elem1[5].style.transform="rotate("+radius+"deg)";
            }
            if(radius>=-330){
              elem1[6].style.transform="rotate("+radius+"deg)";
            }
            if(radius>=-310){
              elem1[7].style.transform="rotate("+radius+"deg)";
            }
            if(radius>=-388){
              elem1[8].style.transform="rotate("+radius+"deg)";
            }

          }

          
        }
        else{
          radius--;
          for(i=0;i<elem.length;i++){
            elem1[i].style.transform="rotate("+radius+"deg)";
            elem2[i].style.transform="rotate("+radius+"deg)";
          }
        }
      }
      else{
        radius--;
        for(i=0;i<elem.length;i++){
          elem1[i].style.transform="rotate("+radius+"deg)";
          elem2[i].style.transform="rotate("+radius+"deg)";
          elem3[i].style.transform="rotate("+radius+"deg)";
            
        }
      
      }
    }
    
  } 
 
  
  
  
  