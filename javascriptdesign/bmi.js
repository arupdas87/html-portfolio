document.getElementById("bmiButton").addEventListener("click", bmiCalculator);
function bmiCalculator() {
    var weightSelectValu = document.getElementById("bmiWeightSel").value;
    var weightInputvalue = document.getElementById("bmiWeight").value;

    var heightSelectValu = document.getElementById("bmiheightSel").value;
    var heightInputvalue = document.getElementById("bmiHeight").value;

    var weight;
    var height;

    if(weightSelectValu === "kg"){
        weight = weightInputvalue;
    }else{
        weight = (weightInputvalue * 450) / 1000;
    }

    if(heightSelectValu === "metres"){
        height = heightInputvalue;
    }else{
        height = heightInputvalue / 3.28;
    }    
    
    var bmi = Math.round(weight / (height * height)); 
    document.getElementById("showWeight").innerHTML = weightInputvalue;
    document.getElementById("showWeightunit").innerHTML = weightSelectValu;
    document.getElementById("showHeight").innerHTML = heightInputvalue;
    document.getElementById("showHeightunit").innerHTML = heightSelectValu;

    if(bmi < 18.5){
        return document.getElementById("shoBmiresultid").innerHTML = ("Your BMI is " + bmi + ", so you are underweight. Take care of yourself.");
    }
    if(bmi >= 18.5 && bmi < 24.9){
        return document.getElementById("shoBmiresultid").innerHTML = ("Your BMI is " + bmi +  ", so you have a normal weight. Very good..");
    }
    if(bmi > 24.9){
        return document.getElementById("shoBmiresultid").innerHTML = ("Your BMI is " + bmi + ", so you are overweight. Do some exercise every day, if there is no problem.");
    }
  
}