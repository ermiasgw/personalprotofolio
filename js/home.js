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
  
  function textanim2(){
    var elem1=document.getElementById("pros");
    var elem2=document.getElementById("pros1");
    elem2.style.visibility="hidden";
    elem2.style.animationName="none";
    elem1.style.visibility="visible";
    elem1.style.animation="anim1 6s linear";
    elem1.onanimationend=textanim3;
    }
    function textanim3(){
      var elem2=document.getElementById("pros");
      var elem1=document.getElementById("pros1");
      elem2.style.animationName="none";
      elem2.style.visibility="hidden";
      elem1.style.visibility="visible";
      elem1.style.animation="anim2 5s linear";
      elem1.onanimationend=textanim4;
      }

      function textanim4(){
        var elem2=document.getElementById("pros1");
        var elem1=document.getElementById("pros2");
        elem2.style.animationName="none";
        elem2.style.visibility="hidden";
        elem1.style.visibility="visible";
        elem1.style.animation="anim3 4s linear";
        elem1.onanimationend=textanim2;
        }

        function textanim4(){
          var elem2=document.getElementById("pros2");
          var elem1=document.getElementById("pros3");
          elem2.style.animationName="none";
          elem2.style.visibility="hidden";
          elem1.style.visibility="visible";
          elem1.style.animation="anim4 4s linear";
          elem1.onanimationend=textanim2;
          }


  function percentt(){
    var elem1=document.querySelectorAll(".childs3");
    var elem2=document.querySelectorAll(".childs1");
    var elem3=document.querySelectorAll(".childs2");
    var elem4 = document.querySelectorAll(".childs");
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
          if(radius<=-380){
            for(i=0;i<elem.length;i++){
              document.getElementsByClassName("percent")[i].style.visibility="visible";
            }
            clearInterval(id);  
          }
          else{
            radius--;
            for(i=0;i<elem.length;i++){
              elem1[i].style.transform="rotate("+radius+"deg)";
                
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
  
  textanim2();
  percentt();