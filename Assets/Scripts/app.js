window.onload = function(){
    clickButton();
};

function clickButton() {
    const show = document.getElementById("nums");
    const butn = document.getElementsByClassName("bttn");
    let num1; 
    let num2;
    let sym;

    Array.from(butn).forEach(button => {
        button.onclick = function(){
            switch(button.value){
                case "CLEAR":
                    show.value = "";
                    num1 = "";
                    num2 = "";
                    sym = "";
                    break;
                case "+":
                    num1 = parseFloat(show.value);
                    button.focus()
                    show.value = ""
                    sym = "+";
                    break;    
                case "-":
                    num1 = parseFloat(show.value);
                    button.focus()
                    show.value = ""
                    sym = "-";
                    break;
                case "*":
                    num1 = parseFloat(show.value);
                    button.focus()
                    show.value = ""
                    sym = "*";
                    break;
                case "/":
                    num1 = parseFloat(show.value);
                    button.focus()
                    show.value = ""
                    sym = "/";
                    break;
                case "=":
                    num2 = parseFloat(show.value);

                    if (sym === "+"){
                        show.value = (num1+num2)
                    } else if(sym === "-"){
                        show.value = (num1-num2)
                    } else if(sym === "*"){
                        show.value = (num1*num2)
                    } else if(sym === "/"){
                        show.value = (num1/num2)
                    }
                    break;
            }

                if (button.value === "=" || button.value === "+" || button.value === "-" || button.value === "*" || button.value === "/" || button.value === "CLEAR"){

                } else{
                    show.value += button.value; 
                }           
        }
    });
}