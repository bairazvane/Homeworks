function myBmi(weight, height) {
  var result = weight / (height * height);
  console.log("BMI is " + result);

  if (result < 18.5) {
    console.log("Your BMI is Underweight");
  } else if (result >= 18.5 && result < 25) {
    console.log("Your BMI is Normal");
  } else if (result >= 25 && result < 30) {
    console.log("Your BMI is Overweight");
  } else {
    console.log("Your BMI is Obese");
  }
}

myBmi(85, 1.86);
