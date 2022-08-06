const btn = document.getElementById("calculate");

btn.addEventListener("click", () => {
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;

    // If any field is not filled then return alert
    if (height == '' || weight == '') {
        alert("Please Enter value Before Calculate");
        return;
    }

    height = height / 100;
    let BMI = (weight / (height * height));
    BMI =BMI.toFixed(2);
    document.querySelector("#result").innerHTML =BMI;

    let status ='';

    if(BMI < 18.5){
        status ="Underweight";
    }
    else if(BMI >= 18.5 && BMI<25){
        status ="Healthy";
    }
    else if(BMI >= 25 && BMI<30){
        status ="Overweight";
    }
    else{
        status ="Obese";
    }

    document.querySelector(".comment").innerHTML=
    `
    You are <span id="comment">${status}</span>
    `

});