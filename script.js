const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

const specialCh = ["%", "*","/", "-","+","="];
let result = "";


//function that calcluate

const calculate =(btnValue) => {
    if(btnValue === "=" && btnValue !==""){
        result = eval(result.replace("%", "/100"));
    }else if(btnValue === "AC"){
        result = ""
    }else if(btnValue === "DEL"){
        result = result.toString().slice(0, -1);
    }else{
        if(btnValue ==="" & specialCh.includes(btnValue)) return;
        result += btnValue;

    }
    display.value = result;

};

buttons.forEach((button) =>(
    button.addEventListener("click",(e) => calculate(e.target.dataset.value))
));



