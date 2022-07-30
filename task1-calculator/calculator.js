const expression=document.querySelector(".expression");
const result=document.querySelector(".result");
const keys=document.querySelectorAll("button");

keys.forEach(key=>{
    key.addEventListener("click",calculate);
});

// function calculate(){
//     console.log("hello");
// }
var evalString=[]
var displayString=[]
function calculate(){
    let buttonText=this.innerText;

    if(buttonText==="clear"){
        expression.innerText="";
        result.innerText="0";
        result.style.animation="";
        expression.style.animation="";
        displayString=[]
        evalString=[]
        return;
    }
    if(buttonText==="del"){
        let last=displayString[displayString.length-1];
        console.log(displayString);
        if(!isNaN(last)&& last.length>1){
            displayString[displayString.length-1]=last.substring(0,last.length-1);
            evalString[evalString.length-1]=last.substring(0,last.length-1);
        }
        else{

            displayString.pop();
            evalString.pop();
        }
       expression.textContent=displayString.join("");
       return;
    }

    if(buttonText==="enter"){
        result.innerText=eval(evalString.join(""));
        result.style.animation="big 0.3s ease-in-out";
        expression.style.animation="small 0.3s ease-in-out";
        result.style.animationFillMode="forwards";
        expression.style.animationFillMode="forwards";
        return;
        
    }
    if(buttonText==="%"){
        displayString.push("%")
        evalString.push("*(1/100)")
        expression.textContent=displayString.join("");
        return;
    }
    if(buttonText==="sqrt"){
        displayString.push("sqrt(")
        evalString.push("Math.sqrt(")
    
        expression.textContent=displayString.join("");
        
        return;  

    }
    if(buttonText==="log"){
        displayString.push("log")
        evalString.push("Math.log")
    
        expression.textContent=displayString.join("");
        
        return;  

    }
    if(buttonText==="+/-"){
     let last=displayString[displayString.length-1];
      if(!isNaN(last)){
        displayString[displayString.length-1]*=-1;
        evalString[evalString.length-1]*=-1;
        
      }
      else{
        if(last==="(-"){
            displayString.pop();
            evalString.pop();
        }
        displayString.push('(-');
        evalString.push('(-');
      }
      expression.textContent=displayString.join("");
       return;
    }

    else{
        let last=displayString[displayString.length-1];
        if(!isNaN(last)&& !isNaN(buttonText)){
            displayString[displayString.length-1]=last+buttonText;
            evalString[evalString.length-1]=last+buttonText;
        }
        else{

            displayString.push(buttonText)
            evalString.push(buttonText)
        }
        expression.textContent=displayString.join("");
   
        return;
    }

}