function nextmove2(margin,i){
    const elem = document.getElementById("snake3");
    const elem2 = document.getElementById("snake2");
    const elem3 = document.getElementById("snake4");
    elem3.style.visibility= "visible";
    let j=1;
    let k=1;
    let id=null;
    let pos=0;
    id = setInterval(frame, 10);
    function frame() {
        if (pos == 301) {
            clearInterval(id);
        }
        else {
            margin++;
            i++;
            if(elem2.style.width != "0px"){
                elem2.style.marginLeft = margin + 'px';
                elem2.style.width = 400-i + 'px';
            
            }
            else{
                elem.style.marginTop = 75 +j + 'px';
                elem.style.height= 300-j + 'px';
                j++;
                
            }
        
        
            pos++;
            elem3.style.marginLeft = 696-pos + 'px';
            elem3.style.width = 10+k + 'px';
            k++;

      }
    }
  }


function nextmove(margin){
    const elem = document.getElementById("snake3");
    const elem2 = document.getElementById("snake2");
    elem.style.visibility= "visible";
    let i=1;
    let j=1;
    let id=null;
    let pos = 0;
    id = setInterval(frame, 10);
    function frame() {
        margin++;
        i++;
        if(elem2.style.width != "0px"){
            elem2.style.marginLeft = margin + 'px';
            elem2.style.width = 400-i + 'px';
        
        }
        else{
            elem.style.marginTop = 75 +j + 'px';
                elem.style.height= 300-j + 'px';
                j++;
        }
      if (pos == 300) {
        clearInterval(id);
        nextmove2(margin,i);
      } 
      else {
        
        pos++;
        elem.style.height = pos + 'px';
      }
    }
  }
function myMove() {
    let i=1;
    let id = null;
    const elem = document.getElementById("snake2");
    let pos = 0;
    let margin=0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 710) {
        
        clearInterval(id);
        nextmove(margin);
      } else {
        if(pos>= 400){ 
            pos++;
            margin++;
            elem.style.marginLeft = margin + 'px';
        }
        else{
            pos++;
            elem.style.width = pos + 'px';
        }
        
      }
    }
  }
  
  function textanim(){
    const elem = document.getElementById("pros");
    let id=null;
    let pos=0;
    let i=0;
    let j=0;
    elem.style.visibility="visible";
    id = setInterval(frame, 20);
    function frame() {
      if(pos>=40){
        if(i==0)
        {
          elem.style.transform="rotate("+j+"deg)";
          j++;
          if(j==15){i=1;}   
        }
        clearInterval(id);
      }
      else{
        pos++;
        elem.style.fontSize = pos+ "px";
      }
    }


  }
  textanim();
  myMove();