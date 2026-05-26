function predictMarks(){

  let hours = document.getElementById("studyHours").value;

  if(hours === ""){
    document.getElementById("result").innerHTML =
    "Please enter study hours";
    
    return;
  }

  let marks = hours * 10;

  if(marks > 100){
    marks = 100;
  }

  document.getElementById("result").innerHTML =
  "Predicted Marks: " + marks + "%";
}