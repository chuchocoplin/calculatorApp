window.onload = function(){
    clickButton();
};

function clickButton() {
    const show = document.getElementById("nums");
    const butn = document.getElementsByClassName("bttn");
    let num1 
    let num2
    let str
    let sp

    Array.from(butn).forEach(button => {
        button.onclick = function(){
            switch(button.value){
                case "+":
                    str = show.value.length;
                    num1 = parseFloat(show.value);
                    break;    
                case "-":
                    str = show.value.length;
                    num1 = parseFloat(show.value);
                    break;
                case "*":
                    str = show.value.length;
                    num1 = parseFloat(show.value);
                    break;
                case "/":
                    str = show.value.length;
                    num1 = parseFloat(show.value);
                    break;
                case "=":
                    if (show.value.length < 5){
                        sp = show.value.length - str;
                        num2 = parseFloat(show.value.slice(sp + 1));
                    } else {
                        num2 = parseFloat(show.value.slice(sp));
                    }
                    console.log(sp);
                    console.log(num2);

                    if (show.value.includes("+")){
                        show.value += button.value;
                        show.value += (num1+num2)
                    } else if(show.value.includes("-")){
                        show.value += button.value;
                        show.value += (num1-num2)
                    } else if(show.value.includes("*")){
                        show.value += button.value;
                        show.value += (num1*num2)
                    } else if(show.value.includes("/")){
                        show.value += button.value;
                        show.value += (num1/num2)
                    }
                    break;
            }
                if (button.value === "="){

                } else{
                    show.value += button.value; 
                }           
        }
    });

}
/*check if buton has been clicked if so add it to the screen. if its first number then show number then if its a symbol show it but if they try using second number it clears and displays only second number when thye hit equals then show only equals*/